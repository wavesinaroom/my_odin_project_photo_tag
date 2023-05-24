import React from "react";

const Picker = ({click, selection})=>{

  function handleItemSelection(e){
    //TODO: Takes selected item and setsSelection with props.click all together
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
