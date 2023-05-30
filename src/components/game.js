import { useState, useEffect } from "react";
import {supabase }from "../config/supabaseClient";
import Image from "./image"

const Game = ()=>{
  const [items, setItems] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [selection, setSelection] = useState(null);
  const [win, setWin] = useState(false);

  useEffect(()=>{

    const fetchOptions = async()=>{
      const{data,error} = await supabase
        .from(`coordinates`)
        .select();

      if(error){
        setFetchError(error);
        setItems(null);
        console.log(error);
      }

      if(data){
        setItems(data);
        setFetchError(error);
        console.dir(data);
      }
    }
  })

  useEffect(()=>{
    const item = items.find(item => item.name === selection.name )

    if(selection.click.x>item.left&&selection.click.x<item.right)
      if(selection.click.y>item.bottom&&selection.click.y<item.top)
        items.filter(item=>item.name!==selection.name)
        if(items.length===0)
          setWin(!win);

  },[items,win,selection])

  return(
    <>
      <Image setSelection={setSelection}/>
    </>
  );

}

export default Game;
