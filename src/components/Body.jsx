import { useState, useId } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import img from "../shreedayal.jpg";
import styles from './Body.module.css'
import arrow from '../arrow.png'
import { BrowserRouter, Routes, Route ,NavLink} from "react-router-dom";
import Header from "./Header";





function Body() {
     return (
      <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.box}>
            <img src={img} alt="img" id={styles.image} />
          </div>
          <div className={styles.box2}>
            <img src={arrow}  alt="" id="arrow"/>
          <NavLink to={'/Register'}>

          <button className={styles.but}>Click Here</button>
          </NavLink>
          <div className={styles.box3}>
            <h4 id={styles.msg}>For any Query Contact :</h4>
            <hr id={styles.line}/>
            <h5 id={styles.own}>RudraNarayan Sahoo : 8917472376</h5>
            <h5 id={styles.own}>Sagarkanta Sahoo :9337273869</h5>
          </div>
          </div>
          
        </div>
        <div className={styles.container3}>
          <div className={styles.box4}>
            <h3 id={styles.punch}>ଆମେ ଆମର ଆଗ୍ରହ ପାଇଁ ଲୋକମାନଙ୍କୁ ସେବା କରୁ | ତେଣୁ ଆମେ ଆମର ଗ୍ରାହକଙ୍କୁ ଅଳ୍ପ ଲାଭ ସହିତ ସେବା କରୁ | ଗ୍ରାହକ ଆମ ପାଇଁ ଇଶ୍ୱର | ଆପଣ ଆମ ଦୋକାନକୁ ଜେକୁନ୍ସି ପ୍ରକାରର ରୋଗରୁ ମୁକ୍ତି ପାଇବାକୁ ଆସିପାରିବ |</h3>
          </div>
        </div>
      </div>
      </>
     )
}

export default Body












































// const reasonRef = useRef("");
// const numberRef = useRef("");
// const villageRef = useRef("");
// const nameRef = useRef("");
// const [name, setname] = useState("");
// const [village, setvillage] = useState("");
// const [number, setnumber] = useState("");
// const [reason, setreason] = useState("");
// const submit = () => {
//   setname(nameRef.current.value);
//   setnumber(numberRef.current.value);
//   setvillage(villageRef.current.value);
// };
// const reasonSub = (e) => {
//   setreason(e.target.value);
//   console.log(e.target.value);
// };

// const data = {
//   name: name,
//   mobilenumber: number,
//   village: village,
//   reason: reason,
// };

// useEffect(() => {
//   axios
//     .post("http://localhost:3000/database", data)
//     .then((response) => console.log(response));
// });
// return (
//   <>
//     <Header />
//     <div className={styles.container}>
//     <div className={styles.box}>
//         <input type="text" placeholder="enter name" id={styles.name} className={styles.input} ref={nameRef} />
//         <input
//           type="text"
//           placeholder="enter village name"
//           id={styles.village}
//           className={styles.input}
//           ref={villageRef}
//         />
//         <input
//           type="text"
//           placeholder="enter mobile number"
//           id={styles.mobile}
//           className={styles.input}
//           ref={numberRef}
//         />
//         <select name="reason" id={styles.reason} className={styles.reason} onClick={(e) => reasonSub(e)}>
//           <option value="Flever" className={styles.value}>Fever</option>
//           <option value="skin disease" className={styles.value}>skin disease</option>
//           <option value="medicine specialist" className={styles.value}>medicine specialist</option>
//         </select>
//         <button type="submit" id={styles.submit} onClick={submit}>
//           Submit
//         </button>
//       </div>
//     </div>
//     </>
// )