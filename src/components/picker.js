import { styled } from "styled-components";

const Picker = ({click, selection})=>{

  function handleSelection(e){
    setSelection({coordinates: {click}, item:e.value});
  }

  return(
    <>
      <dialog>
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
