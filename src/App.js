import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import wheelI from './колесо.png'
import engine from './engine.gif'
import regulator from './regulator.png'
import porsche from './porcshe.jpg'
import krezkopf from './krezkopf.gif'

function App() {
  const [displ,setdispl] = useState('none')
  const [info,setinfo] = useState('')
  const [check, setcheck] = useState(1)
  const [head, sethead] = useState('')
  const [img,setimg] = useState(wheelI)
  const [move, setmove] = useState(160)

  
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (move < 110){
  //       setcheck(1.5)
  //     }else if(move > 240){
  //       setcheck(-1.5)
  //     }
  //     setmove(prev=>prev+check)
  //   }, 1)
    
  //   return () => clearInterval(timer)
  // })
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
      <div className='nahuietovse'>
        <img src={engine} style={{height:'600px'}}/>
        <div style={{position:'absolute',width:'400px',height:'400px',marginLeft:'410px',marginTop:'130px',cursor:'pointer'}}  onClick={(e) => { 
          setdispl('block')
          setinfo('массивное вращающееся колесо, использующееся в качестве накопителя (инерционный аккумулятор) кинетической энергии или для создания инерционного момента, как это используется на космических аппаратах.')
          sethead('Маховик (маховое колесо)')
          setimg(wheelI)
       }}></div>
       <div style={{position:'absolute',width:'80px',height:'60px',marginLeft:'320px',marginTop:'210px',cursor:'pointer'}} onClick={(e) => { 
          setdispl('block')
          setinfo('механизм, реализующий отрицательную обратную связь для регулировки скорости вращения в машинах разнообразных принципов действия и назначения.')
          sethead('Центробежный регулятор')
          setimg(regulator)
       }}></div>
       <div style={{position:'absolute',width:'110px',height:'60px',marginLeft:120,marginTop:'335px',cursor:'pointer'}} onClick={(e) => { 
          setdispl('block')
          setinfo('подвижная деталь поршневых машин (паровых машин, насосов, компрессоров и поршневых двигателей внутреннего сгорания), перекрывающая поперечное сечение её цилиндра и перемещающаяся вдоль его оси. В двигателях, силовых цилиндрах и прессах поршень передаёт давление рабочего тела (газа или жидкости) движущимся частям; в некоторых типах двигателей поршень выполняет также и газораспределительные функции. ')
          sethead('По́ршень')
          setimg(porsche)
       }}></div>
       <div style={{position:'absolute',width:'145px',height:'40px',marginLeft:270,marginTop:'335px',cursor:'pointer'}} onClick={(e) => { 
          setdispl('block')
          setinfo(' деталь кривошипно-ползунного механизма, совершающая возвратно-поступательное движение по неподвижным направляющим. ')
          sethead('Ползу́н (также крейцкопф от нем. Kreuzkopf)')
          setimg(krezkopf)
       }}></div>
      </div>
    </div>
  );
}

export default App;
