import { styled } from 'styled-components';
import {Link} from 'react-router-dom';
const Home = ()=>{

  return(
    <div style={divStyle}>
      <h1>Sarah&apos;s mess</h1>
      <p>Sarah wants to come out and play with her friends but she can&apos;t find her favourite toys to play with. If you help her out, she promises she will keep her room tidy and clean.</p>
      <ul>
        <li>Sarah will think about her toys while you look for them in the pile.</li>
        <li>If you spot one of them, click on it and select its name from the list.</li>
        <li>You must find Sarah&apos;s toys as quick as possible to rank high in the leaderboard.</li>
        <li>Time will start ticking once you click on the button below</li>
      </ul>
      <Link to='/game'><button>Let&apos;s go</button></Link>
    </div>
  );
}
export default Home;

const divStyle = {
  backgroundColor: `#EDE9CA`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  position:`relative`,
  top: `5vh`
}
