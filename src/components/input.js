import {useState} from "react";
import supabase from "../config/supabaseClient"; 

const Input = ({time})=>{
  const [username, setUsername] = useState(``);
  const [fetchError, setFetchError] = useState(null);

  const send = async (input)=>{
    const {error} = await supabase
      .from(`leaderboard`)
      .insert({input})

    if(error)
      setFetchError(error);
    console.log(error);
  }

  function handleSubmit (){
    send({username:username, time:time});
  }

  return(
    <>
      <dialog>
        <p>Thanks for helping out Sarah</p>
        <form onSubmit={handleSubmit}>
          <label for="name">Your username</label>
          <input type="text" name="name" onChange={e => setUsername(e.value)} value={username}/>
          <button type="submit">Send</button>
        </form> 
      </dialog>
    </>
  );

}

export default Input;
