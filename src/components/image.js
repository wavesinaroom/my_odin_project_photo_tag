import { useState} from "react";

const Image = ({handleAction}) =>{
  const [pos, setPos] = useState({x:0, y:0});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalPopup(e){
    setPos({x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY, clientX:e.clientX, clientY:e.clientY});
    setIsModalOpen(!isModalOpen);
    console.log("x", e.nativeEvent.offsetX, "y", e.nativeEvent.offsetY)
  }  

  function handleOption(e){
    handleAction(pos, e.target.innerText);
    setIsModalOpen(!isModalOpen);
  }

  return(
    <>
      <img style={imgStyle} alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleModalPopup} />
      <dialog style={{position:'absolute', top: `${pos.clientY}px`, left:`${pos.clientX}px`, margin:'0px',zIndex:'5'}}open={isModalOpen}>
        <menu>
          <button onClick={handleOption}>Cat</button>
          <button onClick={handleOption}>Dog</button>
          <button onClick={handleOption}>Crayons</button>
          <button onClick={handleOption}>Book</button>
          <button onClick={handleOption}>Doll</button>
        </menu>
      </dialog>
  </>
);
}

export default Image;

const imgStyle = {
  position: `absolute`,
  left: `25vw`,
  top: `10vh`
}

