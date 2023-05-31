import { useState} from "react";

const Image = ({handleSelection}) =>{
  const [click, setClick] = useState({x:0, y:0});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalPopup(e){
    setClick({x:e.clientX, y:e.clientY});
    console.log(click);
    setIsModalOpen(!isModalOpen);
  }  

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleModalPopup} />
      <dialog style={{position:'absolute', top: `${click.y}px`, left:`${click.x}px`, marginLeft:'0px',zIndex:'2'}}open={isModalOpen}>
        <p>{click.x}, {click.y}</p>
        <menu>
          <button onClick={(e)=>{handleSelection({click},e.value)}}>Cat</button>
          <button onClick={(e)=>{handleSelection({click},e.value)}}>Dog</button>
          <button onClick={(e)=>{handleSelection({click},e.value)}}>Crayons</button>
          <button onClick={(e)=>{handleSelection({click},e.value)}}>Book</button>
          <button onClick={(e)=>{handleSelection({click},e.value)}}>Doll</button>
        </menu>
      </dialog>
    </>
  );
}

export default Image;

