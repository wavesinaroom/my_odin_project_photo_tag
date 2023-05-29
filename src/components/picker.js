import React, {useEffect, useState, useRef} from "react";

const Picker = ({click, selection})=>{
  const [position, setPosition] = useState(click);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const ref = useRef();
  useOnClickOutside(ref,()=>{
    setIsModalOpen(false);
  })

  const newPosition=(e)=>{
    return {position:'absolute',
            left:e.x+'px',
            top:e.y+'px'}
  }

  useEffect(()=>{
    setPosition(newPosition(click));
  },[click, setPosition])

  function handleSelection(){
    setIsModalOpen(false);
  }

  function useOnClickOutside(ref, handler){
    useEffect(()=>{
      const listener = (event)=>{
        if(!ref.current || ref.current.contains(event.target))
          return;
        handler(event);
      }
      document.addEventListener(`mousedown`, listener);
      document.addEventListener(`touchstart`, listener);

      return()=>{
        document.removeEventListener(`mousedown`, listener);
        document.removeEventListener(`touchstart`, listener);
      }
    },[ref,handler]
    );
  }

  return(
    <>
      <dialog ref={ref} style={position} open={isModalOpen}>
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

