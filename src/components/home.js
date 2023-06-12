import { styled } from 'styled-components';
import {Link} from 'react-router-dom';
const Home = ()=>{

  return(
    <div style={divStyle}>
      <h1>Sarah&apos;s mess</h1>
      <p>Sarah wants to come out and play with her friends but she can&apos;t find her favourite toys to play with. If you help her out, she promises she will keep her room tidy and clean.</p>
      <ul style={{listStyle:`none`}}>
        <li style ={{paddingBottom:`1em`}}>Sarah will think about her toys while you look for them in the pile.</li>
        <li style ={{paddingBottom:`1em`}}>If you spot one of them, click on it and select its name from the list.</li>
        <li style = {{paddingBottom:`1em`}}>You must find Sarah&apos;s toys as quick as possible to rank high in the leaderboard.</li>
        <li style = {{paddingBottom:`1em`}}>Time will start ticking once you click on the button below</li>
      </ul>
      <Link to='/game'><button>Let&apos;s go</button></Link>
    </div>
  );
}
export default Home;

const divStyle = {
  backgroundColor:"#FFFAF1",
  display:"flex",
  flexDirection: "column",
  alignItems:"center",
  height: "450px",
  width: "700px",
  position: "absolute",
  left:"55%", 
  top: "40%",
  marginLeft: "-250px",
  marginTop: "-250px",
  paddingLeft: "3em",
  paddingRight: "3em",
  borderRadius: "7px"
}

