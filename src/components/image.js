import React, {useState} from "react";
import {styled} from 'styled-components';

const Image = () =>{
  const [coordinate, setCoordinate] = useState(null);
  const [selection, setSelection] = useState(null);
  const [isOpened, toggleModal] = useState(false);

  function handleUserClick(e){
    const newCoordinate = {x:e.clientX, y:e.clientY} 
    setCoordinate(newCoordinate);
    toggleModal(!isOpened);
  }

  function handleItemSelection(e){
    setSelection({coordinates:{coordinate}, item:e.value});
    toggleModal(!isOpened);
  }

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleUserClick}/>
      <dialog open={isOpened}>
        <menu>
          <button onClick={handleItemSelection}>Cat</button>
          <button onClick={handleItemSelection}>Dog</button>
          <button onClick={handleItemSelection}>Crayons</button>
          <button onClick={handleItemSelection}>Book</button>
          <button onClick={handleItemSelection}>Doll</button>
        </menu>
      </dialog>
    </>
  );
}

export default Image;

const dialog = styled.dialog`
  position: absolute;
  top: ${props=>props.coordinate.y}px;
  left: ${props=>props.coordinate.x}px;
`
