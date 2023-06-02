import {useEffect, useState} from "react";

const Timer = ({time, setTime}) =>{
  const [time, setTime] = useState(0);

  useEffect(()=>{
    
    setInterval(()=>{
      const milliseconds = Date.now-time;
      setTime(Math.floor(milliseconds/1000));   
    },1000)
      
  })

  return(
    <p>{time}</p>
  )

}
export default Timer;
