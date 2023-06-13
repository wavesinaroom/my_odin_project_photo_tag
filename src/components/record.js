import {useState} from "react";

const Record = ({record}) =>{
  const [formatted, setFormatted] = useState(formatTime(record.time));

  function formatTime(total){
    let hours = Math.floor(total/3600);
    let minutes = Math.floor(total/60); 
    let seconds = total % 60;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    return (`${hours}:${minutes}:${seconds}`);
  }

  return(
    <>
      <tr>
        <td style={fieldStyle}>{record.username}</td>
        <td>{formatted}</td>
      </tr>
    </>
  )
}

export default Record;

const fieldStyle = {
}
