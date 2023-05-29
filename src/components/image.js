import { useState } from "react";
import Picker from "./picker";

const Image = () =>{
  const [click, setClick] = useState({x:0, y:0});

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={e=>{setClick({x:e.clientX, y:e.clientY})}} />
      <Picker click={click}/>
    </>
  );
}

export default Image;

