import { useState, useEffect, useCallback } from "react";
import supabase from "../config/supabaseClient";
import Image from "./image"
import LeadBoard from "./leader-board";

const Game = ()=>{
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [win, setWin] = useState(false);
  const [found, setFound] = useState(false);
  const [selection, setSelection] = useState(null);

  useEffect(()=>{

    const fetchOptions = async()=>{
      const{data,error} = await supabase
        .from('items')
        .select();

      if(error){
        setFetchError('Could not fetch items');
        setItems(null);
        console.log(error);
      }

      if(data){
        setItems(data);
        setFetchError(null);
        console.log(data);
      }
    }
    fetchOptions();
  },[])

  const handleAction=useCallback((selection)=>{
    
    const item = items.find(item => item.name === selection.toy )

    if(selection.click.x>item.left&&selection.click.x<item.right)
      if(selection.click.y>item.bottom&&selection.click.y<item.top)
        setFound(!found);

    if(found){
      items.filter(item=>item.name!==selection.toy)
      setFound(!found);
      if(items.length===0)
        setWin(!win);
    }
  },[found, win,items])

  useEffect(()=>{
    handleAction(selection);
  },[selection, handleAction]);
  

  return(
    <>
      <Image setSelection={setSelection}/>
      {{found}?<p>You found it</p>:<p>Try again</p>}
      {{win}&&<LeadBoard/>}
    </>
  );

}

export default Game;
