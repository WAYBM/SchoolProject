import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [rot,setrot] = useState(0)
  const style ={
      position:"absolute",
      transform: `translate(900px) rotate(${rot}deg)`,
      width: '400px',
      height: '400px',
  }
  useEffect(()=>{
    const timer = setInterval(()=>
    {
      setrot(prev=>prev+1)
    },1)
    if(rot==360){
      setrot(0)
    }
    return ()=> clearInterval(timer)
  })
  return (
    <div className="App">
      <img src="колесо.png" className='bigwheel' style={style} alt=''/>
      <img src='колесо2.png' style={style}alt=''/>
    </div>
  );
}

export default App;
