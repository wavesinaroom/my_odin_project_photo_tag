import { useState, useEffect } from "react";
import {supabase }from "../config/supabaseClient";

const Game = ()=>{
  const [items, setItems] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [selection, setSelection] = useState(null);

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

}

export default Game;
