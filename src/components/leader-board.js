import { useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import supabase from "../config/supabaseClient";
import uniquid from 'uniqid';
import Record from "./record";

const LeadBoard = () =>{
  const [records, setRecords] = useState([]);
  const [username, setUsername] = useState(``);
  const [fetchError, setFetchError] = useState(null);
  const [isModal, setIsModal] = useState(true);
  const loc = useLocation();
  const time = loc.state.time;

  useEffect(()=>{
    
    const fetchRecords = async()=>{
      const {data,error} = await supabase
        .from('leaderboard')
        .select()
        .order('time',{ascending:true});

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

  },[records]);

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
      {isModal?
        <dialog open={isModal} style={dialogStyle}>
          <p>Thanks for helping out Sarah!</p>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={{marginBottom:`1.5em`}}>
              <label style={{marginRight:`1.5em`}}for="name">Your username</label>
              <input style={{backgroundColor:`ivory`}}type="text" name="name" onChange={handleInput} value={username}/>
            </div>
            <button style={butttonStyle} type="submit">Send</button>
          </form> 
        </dialog>
      :
        <div>
          <table>
            <caption>Leader Board</caption>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Record</th>
            </tr>
              {records.map(record =>(
                <Record key={uniquid()} record={record}/>
              ))}
          </table>
          <Link to='/'><button>Home</button></Link>
          <Link to='/game'><button>Play again!</button></Link>
        </div>
      }
    </>
  );
}

export default LeadBoard;

const dialogStyle = {
  backgroundColor:"#FFFAF1",
  display:"flex",
  flexDirection: "column",
  alignItems:"center",
  height: "170px",
  width: "400px",
  position: "absolute",
  left:"55%", 
  top: "40%",
  marginLeft: "-250px",
  marginTop: "-250px",
  paddingLeft: "3em",
  paddingRight: "3em",
  borderRadius: "7px",
  fontSize: `22px`
}

const formStyle = {
  display:`flex`,
  flexDirection: `column`,
  alignItems: `center`,
}

const butttonStyle = {
  fontWeight:`normal`,
  fontSize:`16px`,
  paddingRight: `1em`,
  paddingLeft: `1em`
}
