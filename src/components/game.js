import { useState, useEffect} from "react";
import supabase from "../config/supabaseClient";
import Image from "./image"
import Input from "./input";
import Timer from "./timer";

const Game = ()=>{
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [found, setFound] = useState("");
  const [time, setTime] = useState(0);

  useEffect(()=>{

    const fetchOptions = async()=>{
      const{data,error} = await supabase
        .from('items')
        .select();

      if(error){
        setFetchError('Could not fetch items');
        setItems(null);
      }

      if(data){
        setItems(data);
        setFetchError(null);
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

    if(click.x>item.left&&click.x<item.right){
      if(click.y<item.bottom&&click.y>item.top){
        setFound(`Well done! You've found Sarah's ${toy}`);
        setItems(items.filter(item=>item.name!==toy));
      }
    }else{
      setFound(`Not quite, try again!`);
      return;
    }
  }

  if(items.length===0){
    return(
      <>
        <Input time={time}/>
      </>
    )
  }
  
  return(
    <>
      {fetchError&&(<p>{fetchError}</p>)}
      <Timer time={time} setTime={setTime}/>
      <Image handleAction={handleAction}/>
      <p>{found}</p>
    </>
  );

}

export default Game;
