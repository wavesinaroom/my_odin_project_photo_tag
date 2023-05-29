import { useState} from "react";

const Image = () =>{
  const [click, setClick] = useState({x:0, y:0});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalPopup(e){
    setClick({x:e.clientX, y:e.clientY});
    setIsModalOpen(!isModalOpen);
  }  
  function handleSelection(){
    setIsModalOpen(!isModalOpen)
  }

  return(
    <>
      <img alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleModalPopup} />
      <dialog style={{position:'absolute', top: `${click.x}px`, left:`${click.y}px`}}open={isModalOpen}>
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

export default Image;

