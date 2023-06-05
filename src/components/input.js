import {useState} from "react";
import supabase from "../config/supabaseClient"; 

const Input = ({time, setIsModal})=>{
  const [username, setUsername] = useState(``);
  const [fetchError, setFetchError] = useState(null);

  const handleSubmit = async (e)=>{
    setIsModal(prev => !prev)
    e.preventDefault();
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
      console.log(data);
    }
  }

  function handleInput(e){
    setUsername(e.target.value);
  }
  return(
    <>
      {fetchError&&(<p>{fetchError}</p>)}
      <dialog open>
        <p>Thanks for helping out Sarah</p>
        <form onSubmit={handleSubmit}>
          <label for="name">Your username</label>
          <input type="text" name="name" onChange={handleInput} value={username}/>
          <button type="submit">Send</button>
        </form> 
      </dialog>
    </>
  );

}

export default Input;
