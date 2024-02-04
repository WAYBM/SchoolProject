import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import wheelI from './колесо.png'
import wheelII from './колесо2.png'
import val from './val.png'
import base from './base.png'
import engine from './engine.gif'

function App() {
  const [displ,setdispl] = useState('none')
  const [rot, setrot] = useState(0)
  const [info,setinfo] = useState('')
  const [head, sethead] = useState('')
  const [img,setimg] = useState(wheelI)
  const style = {
    position: "absolute",
    transform: `rotate(${rot}deg)`,
    width: '400px',
    height: '400px',
    cursor: 'pointer',
  }
  const style1 = {
    position: "absolute",
    transform: `rotate(${rot}deg)`,
    width: '200px',
    height: '200px',
    cursor: 'pointer',
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
      <div className='modalWindow' style={{display:displ}} onClick={()=>{setdispl('none')}}>
        <div className='modalDiolog'>
          <div className='modalHeader'>
            <h3>{head}</h3>
          </div>
          {info}
          <img src={img} style={{display:displ,width:'300px',height:'300px',marginLeft:'50%'}}/>
        </div>
      </div>
      <div className='header'>
        <div className='Zagolovok'>
          <p>Паровой двигатель</p>
        </div>
        <div className='avtor'><p>Nikolay Kutuzov</p></div>
      </div>
      <div className='main'>
        <div className='wheels'>
          <div className='wheels__wrapper' onClick={(e) => { 
          setdispl('block')
          setinfo('массивное вращающееся колесо, использующееся в качестве накопителя (инерционный аккумулятор) кинетической энергии или для создания инерционного момента, как это используется на космических аппаратах.')
          sethead('Маховик (маховое колесо)')
       }}></div>
        <img src={wheelI} className='bigwheel' style={style} alt='' />
        <img src={wheelII} style={style1} alt='' />
        </div>
        <img src={val} style={{position:'absolute',height:'100px',width:'1000px',marginTop:'400px'}}/>
        <img src={base} style={{position:'absolute', marginTop:'10px',width:'1000px'}}/>
      </div>
      <div className='nahuietovse'>
        <img src={engine}/>
      </div>
    </div>
  );
}

export default App;
