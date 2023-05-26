import React, {useEffect, useState} from "react";
import { styled } from "styled-components";

const Picker = ({click, selection})=>{
  const [position, setPosition] = useState(click);

  const newPosition=(e)=>{
    return {position:'absolute',
            left:e.x+'px',
            top:e.y+'px'}
  }

  useEffect(()=>{
    setPosition(newPosition(click));
  },[click, setPosition])

  function handleSelection(e){
    setSelection({coordinates: {click}, item:e.value});
  }

  return(
    <>
      <dialog style={position}>
        <menu>
          <button onClick={handleSelection}>Cat</button>
          <button onClick={handleSelection}>Dog</button>
          <button onClick={handleSelection}>Crayons</button>
          <button onClick={handleSelection}>Book</button>
          <button onClick={handleSelection}>Doll</button>
        </menu>
      </dialog>
    </>
  );
}

export default Picker;

