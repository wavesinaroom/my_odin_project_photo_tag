import React from "react";
import {styled} from "styled-components";

const Picker = ({coordinates,selection})=>{

  function handleItemSelection(e){
    setSelection({coordinates:{coordinates}, item:e.value});
  }
  return(
    <>
      <dialog>
        <menu>
          <li><button onClick={handleItemSelection}>Cat</button></li>
          <li><button onClick={handleItemSelection}>Dog</button></li>
          <li><button onClick={handleItemSelection}>Crayons</button></li>
          <li><button onClick={handleItemSelection}>Doll</button></li>
          <li><button onClick={handleItemSelection}>Book</button></li>
        </menu>
      </dialog>
    </>
  );
}

export default Picker;

const dialog = styled.dialog`
  position: absolute;
  top: ${props=>props.coordinates.y}px;
  left: ${props=>props.coordinates.x}px;
`
