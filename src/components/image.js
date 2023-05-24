import React, {useState} from "react";
const Image = () =>{
  const [click, setClick] = useState({x:0, y:0});

  function handleUserClick(e){
    const newClick = {x:e.clientX, y:e.clientY} 
    setClick(newClick);
  }
  return(
    <>
      <img src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleUserClick}/>
    </>
  );
}

export default Image;
