import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import wheelI from './колесо.png'
import engine from './engine.gif'
import regulator from './regulator.png'
import porsche from './porcshe.jpg'
import krezkopf from './krezkopf.gif'
import papiengine from './Pengine.gif'
import denpapen from './DenPapen.jpg'

function App() {
  const [displ,setdispl] = useState('none')
  const [info,setinfo] = useState('')
  const [head, sethead] = useState('')
  const [img,setimg] = useState(wheelI)

  const style3 = {
    alignSelf:'center',
    overflow:'hidden',
    display:'flex',
    justifyItems:'center',
    alignItems:'center',
    flexDirection:'column',
    border:'dashed 1px grey',
    borderRightWidth:'50px',
    borderLeftWidth: '0px'
  }
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
      <div style={{marginRight:'200px',marginLeft:'200px'}}>
      <div className='header'>
        <div className='Zagolovok'>
          <p style={{fontFamily:"PressStart"}}>Паровой двигатель</p>
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
       <div style={style3}>
        <div className='heading'>  
        Схема работы паровой машины двойного действия
        </div>
        <p>
          Принцип действия поршневой паровой машины показан на иллюстрации. Работа поршня посредством штока, ползуна, шатуна и кривошипа передаётся главному валу, несущему маховик, который служит для снижения неравномерности вращения вала. Эксцентрик, сидящий на главном валу, с помощью эксцентриковой тяги приводит в движение золотник, управляющий впуском пара в полости цилиндра. Пар из цилиндра выпускается в атмосферу или поступает в конденсатор. Для поддержания постоянного числа оборотов вала при изменяющейся нагрузке паровые машины снабжаются центробежным регулятором, автоматически изменяющим сечение прохода пара, поступающего в паровую машину (дроссельное регулирование, показано на рисунке), или момент отсечки наполнения (количественное регулирование).</p>
       </div>
      </div>
      <div className='main2'>
        <img className='engine2' src={papiengine}/>
        <div className='text' style={style3}>
          <p className='heading'>Схема работы паровой машины Дени Папена</p>
          <p>Нижняя часть гильзы наполнялась водой. При этом поршень находился в нижнем положение.<br/>
              Гильза устанавливалась на печь.<br/>
              Вода закипала, пар расширялся и созданным давлением толкал поршень вверх.<br/>
              Избыток пара выводился в атмосферу, некоторая его часть попадала за поршень, через клапан, а поднятый поршень фиксировался стопором.<br/>
              </p>
        </div>
       <img style={{height:'450px',alignSelf:'center',marginRight:'100px',borderRadius:'50px'}} src={denpapen}/>
      </div>
      </div>
    </div>
  );
}

export default App;
