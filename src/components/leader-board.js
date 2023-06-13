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
            <button style={submitStyle} type="submit">Send</button>
          </form> 
        </dialog>
      :
        <div>
          <div style={uiButtonStyle}>
            <Link to='/'><button style={buttonStyle}>Home</button></Link>
            <Link to='/game'><button style={buttonStyle}>Play again!</button></Link>
          </div>
          <table style={tableStyle}>
            <thead style={headerStyle}>
              <tr>
                <th colspan="2">Leader board</th>
              </tr>
            </thead>
            <tr style={titleStyle}>
              <th style={{marginRight:`20em`}}scope="col">Player</th>
              <th scope="col">Record</th>
            </tr>
              {records.map(record =>(
                <Record key={uniquid()} record={record}/>
              ))}
          </table>
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

const submitStyle = {
  fontWeight:`normal`,
  fontSize:`16px`,
  paddingRight: `1em`,
  paddingLeft: `1em`
}

const tableStyle = {
  backgroundColor:`ivory`,
  display:"flex",
  flexDirection: "column",
  alignItems:"center",
  minHeight: "170px",
  width: "900px",
  position: "absolute",
  left:"55%", 
  top: "20%",
  marginLeft: "-250px",
  marginTop: "-250px",
  paddingLeft: "3em",
  paddingRight: "3em",
  borderRadius: "7px",
  fontSize: `22px`,
  padding:`3em`
}

const headerStyle = {
  marginBottom: `1em` 
}

const titleStyle = {
  display: `flex`,
  marginTop: `1em`,
  marginBottom: `1em`
}

const buttonStyle = {
  fontWeight: `normal`,
  backgroundColor: `ivory`,
  marginRight:`5vw`,
  paddingLeft: `1em`,
  paddingRight:`1em`
}

const uiButtonStyle = {
  display: `flex`,
  justifyContent: `flex-end`,
  marginTop: `3vh`,
  marginRight: `3vw`
}
