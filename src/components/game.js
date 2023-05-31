import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import Image from "./image"
import LeadBoard from "./leader-board";

const Game = ()=>{
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [selection, setSelection] = useState({});
  const [win, setWin] = useState(false);
  const [found, setFound] = useState(false);

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

  function handleSelection(click, toy){
    const item = items.find(item => item.name === toy )

    if(click.x>item.left&&click.x<item.right)
      if(click.y>item.bottom&&click.y<item.top)
        setFound(!found);

    if(found){
      items.filter(item=>item.name!==toy)
      setFound(!found);
      if(items.length===0)
        setWin(!win);
    }
  }

  return(
    <>
      <Image setSelection={handleSelection}/>
      {{found}?<p>You found it</p>:<p>Try again</p>}
      {{win}&&<LeadBoard/>}
    </>
  );

}

export default Game;
