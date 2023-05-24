import React, {useState, useRef} from "react";

const Image = () =>{
  const [coordinate, setCoordinate] = useState({x:0, y:0});
  const [selection, setSelection] = useState(null);
  const dialog = useRef(null);

  function handleUserClick(e){
    const newCoordinate = {x:e.clientX, y:e.clientY} 
    setCoordinate(newCoordinate);
    dialog.current.showModal();
  }

  function handleItemSelection(e){
    setSelection({coordinates:{coordinate}, item:e.value});
  }

  return(
    <>
      <img src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleUserClick}/>
      <dialog ref={dialog}>
        <form method="dialog">
          <li><button onClick={handleItemSelection}>Cat</button></li>
          <li><button onClick={handleItemSelection}>Dog</button></li>
          <li><button onClick={handleItemSelection}>Crayons</button></li>
          <li><button onClick={handleItemSelection}>Doll</button></li>
          <li><button onClick={handleItemSelection}>Book</button></li>
        </form>
      </dialog>
    </>
  );
}

export default Image;

const dialog = styled.dialog`
  position: absolute;
  top: ${props=>props.coordinates.y}px;
  left: ${props=>props.coordinates.x}px;
`
