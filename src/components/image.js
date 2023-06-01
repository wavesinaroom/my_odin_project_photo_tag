import { useState} from "react";

const Image = ({handleAction}) =>{
  const [pos, setPos] = useState({x:0, y:0});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalPopup(e){
    setPos({x:e.clientX, y:e.clientY});
    setIsModalOpen(!isModalOpen);
  }  

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleModalPopup} />
      <dialog style={{position:'absolute', top: `${pos.y}px`, left:`${pos.x}px`, marginLeft:'0px',zIndex:'2'}}open={isModalOpen}>
        <menu>
          <button onClick={(e)=>{handleAction({pos}, e.target.innerText)}}>Cat</button>
          <button onClick={(e)=>{handleAction({pos}, e.target.innerText)}}>Dog</button>
          <button onClick={(e)=>{handleAction({pos}, e.target.innerText)}}>Crayons</button>
          <button onClick={(e)=>{handleAction({pos}, e.target.innerText)}}>Book</button>
          <button onClick={(e)=>{handleAction({pos}, e.target.innerText)}}>Doll</button>
        </menu>
      </dialog>
  </>
);
}

export default Image;

