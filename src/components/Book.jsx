import React from "react";
import styles from "./Book.module.css";
import { useState, useId } from "react";
import { useEffect, useRef } from "react";
import Header from "./Header";
import axios from "axios";
import photo from './dayal.png'
function Book() {
    const resRef=useRef('')
    const genderRef=useRef('')
    const reasonRef=useRef('')
    const [loading,setloading]=useState('')
    const butRef=useRef('')
  const nameRef = useRef("");
  const villageRef = useRef("");
  const mobileRef = useRef("");

//   const [name, setname] = useState("");
//   const [villagename, setvillagename] = useState("");
//   const [mobilenumber, setmobilenumber] = useState("");
//   const [gender, setgender] = useState("");
//   const [reason, setreason] = useState("");
  
  
  const book = async () => {
    butRef.current.innerText='Booking...'
    
 
//   setgender(genderRef.current.value)
//   setreason(reasonRef.current.value)
//     setname(nameRef.current.value);
//     setmobilenumber(mobileRef.current.value);
//     setvillagename(villageRef.current.value);
 const name=nameRef.current.value
 const villagename=villageRef.current.value
 const mobilenumber=mobileRef.current.value
 const gender=genderRef.current.value
 const reason=reasonRef.current.value


    const data = {
      name: name,
      villagename: villagename,
      mobilenumber: mobilenumber,
      Gender: gender,
      reason: reason,
    };
    console.log(data)
    nameRef.current.value=''
    mobileRef.current.value=''
    villageRef.current.value=''
    genderRef.current.value=''
    reasonRef.current.value=''
    try {
      const promise =  axios.post("http://localhost:3000/database", data);
      promise.then((response)=>{
          let data1=response.data;
          resRef.current.innerText=`${data1}`
          
          if(data1.length!=0){
            butRef.current.innerText='Booking failed'
            setTimeout(() => {
                resRef.current.innerText=''
              }, 5000);
          }
          if(data1.length==0){
            butRef.current.innerText='Booked...'
          }
          
          
      })
      butRef.current.innerText='Booked'
          
      setTimeout(()=>{
        butRef.current.innerText='Book a Ticket'
      },5000)
      
    } catch (error) {
      throw new Error("Failed");
    }
  };

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Enter your name...."
            className={styles.name}
            id={styles.name}
            ref={nameRef}
          />
          <select
            name="gender"
            id="gender"
          
            className={styles.gender}
            
            ref={genderRef}
          >

            <option value="select" selected disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            placeholder="Enter Your village name....."
            className={styles.name}
            id={styles.village}
            ref={villageRef}
          />
          <input
            type="text"
            placeholder="Enter Your mobile number....."
            className={styles.name}
            id={styles.number}
            ref={mobileRef}
          />
          <select
            name="dis"
            id="dis"
            className={styles.dis}
            ref={reasonRef}
            
          >
            <option value="select" selected disabled>Select Your problem</option>
            <option value="fever">Fever</option>
            <option value="Skin Disease">Skin Disease</option>

            <option value="others">Others</option>
          </select>
          <button onClick={book} className={styles.book} ref={butRef}>
            Book a Ticket
          </button>
          <h3 id={styles.response} ref={resRef}></h3>
        </div>
        <div className={styles.box2}>
            <img src={photo} alt="" id={styles.logo}/>
        </div>
      </div>
    </>
  );
}

export default Book;
