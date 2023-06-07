import {useNavigate} from 'react-router-dom';
import { useState, useEffect, useRef} from "react";
import supabase from "../config/supabaseClient";
import Image from "./image"
import Timer from "./timer";

const Game = ()=>{
  let items = useRef([]);
  const [fetchError, setFetchError] = useState(null);
  const [found, setFound] = useState("");
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{

    const fetchOptions = async()=>{
      const{data,error} = await supabase
        .from('items')
        .select();

      if(error){
        setFetchError('Could not fetch items');
        items.current = [];
      }

      if(data){
        items.current = data;
        setFetchError(null);
      }
    }
    fetchOptions();
  },[])

  function handleAction(click, toy){
    
    const item = items.current.find(item => item.name === toy )

    if(!item){
      setFound(`Not quite, try again!`);
      return;
    }

    if(click.x>item.left&&click.x<item.right){
      if(click.y<item.bottom&&click.y>item.top){
        setFound(`Well done! You've found Sarah's ${toy}`);
        items.current = items.current.filter((item)=>item.name!==toy);
        if(items.current.length === 0)
          navigate("/leaderboard", {state:time});
      }
    }else{
      setFound(`Not quite, try again!`);
      return;
    }
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
