import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import wheelI from './колесо.png'
import wheelII from './колесо2.png'

function App() {
  const [rot, setrot] = useState(0)
  const style = {
    position: "absolute",
    transform: `rotate(${rot}deg)`,
    width: '400px',
    height: '400px',
  }
  const style1 = {
    position: "absolute",
    transform: `rotate(${rot}deg)`,
    width: '200px',
    height: '200px',
  }

  
  useEffect(() => {
    const timer = setInterval(() => {
      setrot(prev => prev + 0.5)
    }, 1)
    if (rot == 360) {
      setrot(0)
    }
    return () => clearInterval(timer)
  })
  return (
    <div className="App">
      <div className='modalWindow'>
        <div className='modalDiolog'>
          <div className='modalHeader'>
            <h3></h3>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='Zagolovok'>
          <p>Паровой двигатель</p>
        </div>
        <div className='avtor'><p>Nikolay Kutuzov</p></div>
      </div>
      <div className='main'>
        <img src={wheelI} className='bigwheel' onClick={() => { console.log('cock'); }} style={style} alt='' />
        <img src={wheelII} style={style1} alt='' />
      </div>
    </div>
  );
}

export default App;
