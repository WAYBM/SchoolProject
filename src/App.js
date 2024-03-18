import "./App.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import wheelI from "./колесо.png";
import engine from "./engine.gif";
import regulator from "./regulator.png";
import porsche from "./porcshe.jpg";
import krezkopf from "./krezkopf.gif";
import papiengine from "./Pengine.gif";
import denpapen from "./DenPapen.jpg";
import val from "./val.jpg";
import kpd1 from "./kpd 1.jpg";
import kpd2 from "./kpd2.jpg";
import water from "./water.jpg";
import atom from './atom.png'

function App() {
  const [displ, setdispl] = useState("none");
  const [info, setinfo] = useState("");
  const [head, sethead] = useState("");
  const [img, setimg] = useState(wheelI);
  const [info2, setinfo2] = useState(0);
  const [info3, setinfo3] = useState(0);
  const [visible, setvisible] = useState(0)
  const [posx, setposx] = useState(0)
  const ref = useRef(0)

  const change = (e) => {
    if (e.currentTarget.parentNode.lastElementChild.style.height == '0px') {
      e.currentTarget.parentNode.lastElementChild.style.height = '350px'
    } else {
      e.currentTarget.parentNode.lastElementChild.style.height = '0px'
    }
  };
  const style3 = {
    alignSelf: "center",
    overflow: "hidden",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: '5%',
    borderImage: 'linear-gradient(black, grey) 30',
    borderWidth: '4px',
    borderStyle: 'dashed',
    borderRightWidth: "50px",
    borderLeftWidth: "0px",
  };
  const textstyle = {
    transition: 'all 1s',
    height: 0
  }
  useEffect(() => {
    const scrollHeight = document.body.scrollHeight
    let obj = ref.current
    let atoms = document.querySelectorAll('.atoms')
    const move = setInterval(() => {
      for (let i = 0; i < atoms.length; i++) {
        let keke = atoms[i].style.transform.replace(/[translateXY()px]/g, '')
        if (Number(keke.substring(keke.indexOf(' '))) > scrollHeight - 300) {
          atoms[i].remove()
        }
        atoms[i].style.transform = `translate(${Number(keke.substring(0, keke.indexOf(',')))}px,${Number(keke.substring(keke.indexOf(' '))) + 2}px)`
      }
    }, 100);
    const int = setInterval(() => {
      setposx(Math.floor(Math.random() * window.innerWidth - 100))
      obj.insertAdjacentHTML('afterbegin', `<img src=${atom} style = transform:${`translate(${posx}px,0px);transition:0.1s;opacity:50;`} class = ${'atoms'}>`)
    }, 4000);
    return () => {
      clearInterval(move)
      clearInterval(int)
    }
  })
  return (
    <div className="App" style={{ zIndex: 5 }}>
      <div className="atomsparent" ref={ref} style={{opacity:visible}}></div>
      <div className="header">
        <div className="Zagolovok">
          <p style={{ fontFamily: "PressStart" }}>Паровой двигатель</p>
        </div>
        <div className="avtor">
        <button className="btnatom" onClick={()=>{
          let result = visible==0 ? 100:0
          setvisible(result)
          alert('atom visible none')
        }}>ATOM</button>
          <p>Nikolay Kutuzov</p>
        </div>
      </div>
      <div
        className="modalWindow"
        style={{ display: displ }}
        onClick={() => {
          setdispl("none");
        }}
      >
        <div className="modalDiolog">
          <div className="modalHeader">
            <h3>{head}</h3>
          </div>
          {info}
          <img
            src={img}
            style={{
              display: displ,
              width: "300px",
              height: "300px",
              marginLeft: "50%",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginRight: (window.innerWidth / 100) * 12,
          marginLeft: (window.innerWidth / 100) * 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="nahuietovse">
          <img src={engine} style={{ height: "600px" }} />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              marginLeft: "410px",
              marginTop: "130px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setdispl("block");
              setinfo(
                "массивное вращающееся колесо, использующееся в качестве накопителя (инерционный аккумулятор) кинетической энергии или для создания инерционного момента, как это используется на космических аппаратах."
              );
              sethead("Маховик (маховое колесо)");
              setimg(wheelI);
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "80px",
              height: "60px",
              marginLeft: "320px",
              marginTop: "210px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setdispl("block");
              setinfo(
                "механизм, реализующий отрицательную обратную связь для регулировки скорости вращения в машинах разнообразных принципов действия и назначения."
              );
              sethead("Центробежный регулятор");
              setimg(regulator);
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "110px",
              height: "60px",
              marginLeft: 120,
              marginTop: "335px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setdispl("block");
              setinfo(
                "подвижная деталь поршневых машин (паровых машин, насосов, компрессоров и поршневых двигателей внутреннего сгорания), перекрывающая поперечное сечение её цилиндра и перемещающаяся вдоль его оси. В двигателях, силовых цилиндрах и прессах поршень передаёт давление рабочего тела (газа или жидкости) движущимся частям; в некоторых типах двигателей поршень выполняет также и газораспределительные функции. "
              );
              sethead("По́ршень");
              setimg(porsche);
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "145px",
              height: "40px",
              marginLeft: 270,
              marginTop: "335px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setdispl("block");
              setinfo(
                " деталь кривошипно-ползунного механизма, совершающая возвратно-поступательное движение по неподвижным направляющим. "
              );
              sethead("Ползу́н (также крейцкопф от нем. Kreuzkopf)");
              setimg(krezkopf);
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              marginLeft: 575,
              marginTop: "335px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setdispl("block");
              setinfo(
                " — деталь машины, предназначенная для передачи крутящего момента и восприятия действующих сил со стороны расположенных на нём деталей и опор. Широко применяются в различных отраслях — в горно-добывающей промышленности, на производстве бумаги, картона, металлопроката, пленки, металлической упаковки, текстиля, в полиграфии и др. "
              );
              sethead("Вал");
              setimg(val);
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div style={style3}>
              <div
                className="heading"
                onClick={(e) => {
                  change(e)
                }}
              >
                Схема работы паровой машины двойного действия
              </div>
              <p style={textstyle}>
                Принцип действия поршневой паровой машины показан на
                иллюстрации. Работа поршня посредством штока, ползуна, шатуна и
                кривошипа передаётся главному валу, несущему маховик, который
                служит для снижения неравномерности вращения вала. Эксцентрик,
                сидящий на главном валу, с помощью эксцентриковой тяги приводит
                в движение золотник, управляющий впуском пара в полости
                цилиндра. Пар из цилиндра выпускается в атмосферу или поступает
                в конденсатор. Для поддержания постоянного числа оборотов вала
                при изменяющейся нагрузке паровые машины снабжаются центробежным
                регулятором, автоматически изменяющим сечение прохода пара,
                поступающего в паровую машину (дроссельное регулирование,
                показано на рисунке), или момент отсечки наполнения
                (количественное регулирование).
              </p>
            </div>
            <div style={style3}>
              <div
                className="heading"
                onClick={(e) => {
                  change(e)
                }}
              >
                История создания
              </div>
              <p style={textstyle}>
                Универсальный паровой двигатель, пригодный для практической
                эксплуатации, был создан шотландским изобретателем Джеймсом
                Уаттом. Уатт, еще в детстве мастеривший модели машин, выбрал
                профессию механика. Пройдя курс обучения в Глазго и Лондоне, он
                с 1757 г. стал работать в качестве механика в университете в
                Глазго и тогда же открыл мастерскую для изготовления и ремонта
                математических и физических приборов.Непосредственно работу над паровыми
                машинами Уатт начал в 1763 г. с починки модели действующей
                паронасосной установки Ньюко-мена. После пяти лет упорной работы над
                моделью Уатт сделал громадный шаг в деле совершенствования
                паровых двигателей и повышения их экономичности.В 1765 г. была построена модель нового
                двигателя, но только в 1769 г. удалось добиться его работы по
                полному циклу
              </p>
            </div>
          </div>
        </div>
        <div className="main2">
          <img className="engine2" src={papiengine} />
          <div>
          <div className="text" style={style3}>
            <p className="heading" onClick={(e) => {
              change(e)
            }}>Схема работы паровой машины Дени Папена</p>
            <p style={textstyle}>
              Нижняя часть гильзы наполнялась водой. При этом поршень находился
              в нижнем положение.
              <br />
              Гильза устанавливалась на печь.
              <br />
              Вода закипала, пар расширялся и созданным давлением толкал поршень
              вверх.
              <br />
              Избыток пара выводился в атмосферу, некоторая его часть попадала
              за поршень, через клапан, а поднятый поршень фиксировался
              стопором.
              <br />
            </p>
          </div>
          <div className="historyp" style={style3}>
            <div className="heading" onClick={(e)=>change(e)}> История создания</div>
            <p style={textstyle}>Одним из опытов французского физика и изобретателя Дени Папена было создание вакуума в закрытом цилиндре.

В середине 1670-х годов в Париже он в сотрудничестве с голландским физиком Гюйгенсом работал над машиной, которая вытесняла воздух из цилиндра путём взрыва пороха в нём.

Видя неполноту вакуума, создаваемого при этом, Папен после приезда в Англию в 1680 году создал вариант такого же цилиндра, в котором получил более полный вакуум с помощью кипящей воды, которая конденсировалась в цилиндре.

Таким образом, он смог поднять груз, присоединённый к поршню верёвкой, перекинутой через шкив. Система работала только как демонстрационная модель: для повторения процесса весь аппарат должен был быть демонтирован и повторно собран.

Папен быстро понял, что для автоматизации цикла пар должен быть произведён отдельно в котле. Поэтому Папен считается изобретателем парового котла, проложив таким образом путь к паровому двигателю Ньюкомена.

Однако конструкцию действующей паровой машины он не предложил.</p>
          </div>

          </div>
          <img
            style={{
              height: "450px",
              alignSelf: "center",
              marginRight: "100px",
              borderRadius: "50px",
            }}
            src={denpapen}
          />
        </div>

        <div className="main3">
          <table>
            <tr>
              <th>План дальнейшего развития сайта</th>
            </tr>
            <tr>
              <td>• Работа над оформлением и userfrendly интерфейсом</td>
            </tr>
            <tr>
              <td>• Добавление больше информации</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="opinion">
        <p style={{ alignSelf: "end", color: "white", marginRight:'100px' }}>
          Отзыв о нашем сайте
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", alignSelf: "end" , marginRight:'50px'}}
        >
          <textarea
            cols="40"
            rows="3"
            style={{
              width: "auto",
              fontSize: "large",
              fontFamily: "Montserrat Alternates",
              borderRadius: "10px",
            }}
          ></textarea>
          <button
            className="btnsend"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
