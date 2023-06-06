import { useEffect, useState} from "react";
import supabase from "../config/supabaseClient";
import Record from "./record";

const LeadBoard = ({time}) =>{
  const [records, setRecords] = useState([]);
  const [username, setUsername] = useState(``);
  const [fetchError, setFetchError] = useState(null);
  const [isModal, setIsModal] = useState(true);

  useEffect(()=>{
    
    const fetchRecords = async()=>{
      const {data,error} = await supabase
        .from('leaderboard')
        .select();

      if(error){
        setFetchError(null)
        setRecords(null);
      }

      if(data){
        setRecords(data);
        setFetchError(null);
      }
    }

    fetchRecords();

  },[setIsModal]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsModal(!isModal);
    const {data,error} = await supabase
      .from(`leaderboard`)
      .insert([{username, time}])

    if(error){
      setFetchError(error);
      console.log(error);
    }

    if(data){
      setFetchError(null);
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
          <button type="submit">Send</button>
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
