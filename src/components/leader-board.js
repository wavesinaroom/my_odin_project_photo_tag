import { useState} from "react";
import supabase from "../config/supabaseClient";
import Record from "./record";

const LeadBoard = ({time}) =>{
  const [records, setRecords] = useState([]);
  const [username, setUsername] = useState(``);
  const [fetchError, setFetchError] = useState(null);
  const [isModal, setIsModal] = useState(true);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsModal(!isModal);
    const {data,error} = await supabase
      .from(`leaderboard`)
      .insert([{username, time}])
      .select();

    if(error){
      setFetchError(error);
      console.log(error);
    }

    if(data){
      setFetchError(null);
      setRecords(data);
      console.log(data);
    }
  }

  function handleInput(e){
    setUsername(e.target.value);
  }

  return(
    <>
      {fetchError&&(<p>{fetchError}</p>)}
      <dialog open={isModal} >
        <p>Thanks for helping out Sarah</p>
        <form onSubmit={handleSubmit}>
          <label for="name">Your username</label>
          <input type="text" name="name" onChange={handleInput} value={username}/>
          <button formmethod="dialog" type="submit">Send</button>
        </form> 
      </dialog>
      {isModal?null
      :
        <div>
          <table>
            <caption>Leader Board</caption>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Record</th>
            </tr>
              {records.map(record =>(
                <Record record={record}/>
              ))}
          </table>
          <button>Back</button>
        </div>
      }
    </>
  );
}

export default LeadBoard;
