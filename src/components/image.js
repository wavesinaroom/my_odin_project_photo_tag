import { useState} from "react";

const Image = ({handleAction}) =>{
  const [pos, setPos] = useState({x:0, y:0});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalPopup(e){
    setPos({x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY, clientX:e.clientX, clientY:e.clientY});
    setIsModalOpen(!isModalOpen);
  }  

  function handleOption(e){
    handleAction(pos, e.target.innerText);
    setIsModalOpen(!isModalOpen);
  }

  function handleOver(e){
    e.target.style.backgroundColor = `cornsilk`;
  }

  function handleOut(e){
    e.target.style.backgroundColor = `white`
  }

  return(
    <>
      <img style={imgStyle} alt="sarah's-mess" src="https://www.puzzleprime.com/wp-content/uploads/2018/10/bigstock-Find-Objects-Visual-Game-Solu-72484915-1-1920x1574.jpg" onClick={handleModalPopup} />
      <dialog style={{position:'absolute', top: `${pos.clientY}px`, left:`${pos.clientX}px`, margin:'0px',zIndex:'5', padding:`0`}}open={isModalOpen}>
        <menu style={menuStyle}>
          <button style={butStyle} onClick={handleOption} onMouseOver={handleOver} onMouseOut={handleOut}>Cat</button>
          <button style={butStyle} onClick={handleOption} onMouseOver={handleOver} onMouseOut={handleOut}>Dog</button>
          <button style={butStyle} onClick={handleOption} onMouseOver={handleOver} onMouseOut={handleOut}>Crayons</button>
          <button style={butStyle} onClick={handleOption} onMouseOver={handleOver} onMouseOut={handleOut}>Book</button>
          <button style={butStyle} onClick={handleOption} onMouseOver={handleOver} onMouseOut={handleOut}>Doll</button>
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

const menuStyle = {
  display: `flex`,
  flexDirection:`column`,
  padding:`0`,
  margin: `0`
}

const butStyle = {
  border:`none`,
  fontWeight: `normal`
}
