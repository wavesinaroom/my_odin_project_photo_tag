import {useEffect, useState} from "react";

const Timer = ({time, setTime}) =>{
  const [format, setFormat] = useState("00:00:00");
  useEffect(()=>{
    
    function formatTime(total){
      let hours = Math.floor(total/3600);
      let minutes = Math.floor(total/60); 
      let seconds = total % 60;

      hours = String(hours).padStart(2,"0");
      minutes = String(minutes).padStart(2,"0");
      seconds = String(seconds).padStart(2,"0");

      return (`${hours}:${minutes}:${seconds}`);
    }
    
    setTimeout(()=>{
      const update = time+1;
      setTime(update);
      setFormat(formatTime(update));
    },1000)
      
  })

  return(
    <p>{format}</p>
  )

}
export default Timer;
