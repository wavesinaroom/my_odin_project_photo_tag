import {useEffect} from "react";

const Timer = ({time, setTime}) =>{

  useEffect(()=>{
    
    setTimeout(()=>{
      const update = time+1;
      setTime(update);
    },1000)
      
  })

  return(
    <p>{time}</p>
  )

}
export default Timer;
