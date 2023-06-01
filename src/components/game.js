import { useState, useEffect} from "react";
import supabase from "../config/supabaseClient";
import Image from "./image"
import LeadBoard from "./leader-board";

const Game = ()=>{
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [win, setWin] = useState(false);
  const [found, setFound] = useState("");

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

  function handleAction(click, toy){
    
    const item = items.find(item => item.name === toy )

    if(!item){
      setFound(`Not quite, try again!`);
      return;
    }

    if(click.pos.x>item.left&&click.pos.x<item.right){
      if(click.pos.y<item.bottom&&click.pos.y>item.top){
        setFound(`Well done! You've found Sarah's ${toy}`);
        items.filter(item=>item.name!==toy);
      }
    }else{
      setFound(`Not quite, try again!`);
      return;
    }

    if(items.length===0)
      setWin(!win);

  }
  

  return(
    <>
      {fetchError&&(<p>{fetchError}</p>)}
      <Image handleAction={handleAction}/>
      <p>{found}</p>
      {{win}&&<LeadBoard/>}
    </>
  );

}

export default Game;
