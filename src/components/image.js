import React, {useEffect, useState} from "react";
import {styled} from 'styled-components';
import {supase} from '../config/supabaseClient'

const Image = ({found}) =>{
  const [coordinate, setCoordinate] = useState(null);
  const [selection, setSelection] = useState(null);
  const [isOpened, toggleModal] = useState(false);
  const [items, setItems] = useState(null);
  const [fetchError, setFetchError]  = useState(null);

  function handleUserClick(e){
    const newCoordinate = {x:e.clientX, y:e.clientY} 
    setCoordinate(newCoordinate);
    toggleModal(!isOpened);
  }

  function handleItemSelection(e){
    setSelection({coordinate:{coordinate}, name:e.value});
    toggleModal(!isOpened);

    const item = items.find(i => i.name === selection.item)
    
    if(selection.coordinate.x>item.left&&selection.coordinate.x<item.right)
      if(selection.coordinate.y>item.bottom&&selection.coordinate.y<item.top)
        setFound(true);
    else
        setFound(false);
  }

  useEffect(()=>{
    
    const fetchOptions = async ()=>{
      const{data,error} = await supase
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
  },[])

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleUserClick}/>
      <dialog open={isOpened} style={`top:${coordinate.y}; left:${coordinate.x}`}>
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
`
