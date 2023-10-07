import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Test() {
  const [faculties, setFaculties] = useState([]);
  const [subj,setSubj] = useState([]);
  const [timing, setTiming] = useState("1st");
  const [day, setDay] = useState("MON");
  const [nday, setnDay] = useState("MON");
  const [ntime,setntime] = useState(0);
  const [count, setCount] = useState(1);
  const year=sessionStorage.getItem("ayear");
  const branch=sessionStorage.getItem("abranch");
  const sec=sessionStorage.getItem("asection");
  useEffect(() => {
    const data = sessionStorage.getItem("facu");
    const faculties = JSON.parse(data).map(({ faculty }) => faculty);
    setFaculties(faculties);
    const subj=JSON.parse(data).map(({subject}) => subject);
    setSubj(subj)
  }, []);
  useEffect(()=>{
    if(count===0){
        setCount(1)
    }
    else if(count===8){
        setntime(ntime+1)

    }
    if(ntime===6 && count===1){

        window.location.href="/../admin/assign";
        document.getElementById("subm").style.display="none";
        document.getElementById("fin").style.display="inline";
    }
  },[count])

  useEffect(()=>{
    document.getElementById("su").value="select";
  },[count])
  function handle(e) {
    e.preventDefault();
    const dayList = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayIndex = dayList.indexOf(day);
    const nextDayIndex = (dayIndex + 1) % dayList.length;
    const nextDay = dayList[nextDayIndex];
    
    let time = timing;
    let fac = document.getElementById("facul").value;
    let su = document.getElementById("su").value;

    let nextTiming = "";
    if(timing===""){
        nextTiming="1st";
    }
    else if (timing === "1st") {
      nextTiming = "2nd";
    } else if (timing === "2nd") {
      nextTiming = "3rd";
    } else if (timing === "3rd") {
      nextTiming = "4th";
    } else if (timing === "4th") {
      nextTiming = "5th";
    } else if (timing === "5th") {
      nextTiming = "6th";
    } else if (timing === "6th") {
      nextTiming = "7th";
    } else if (timing === "7th") {
      document.getElementById("update").style.display = "none";
      document.getElementById("subm").style.display = "inline";
      nextTiming = "8th";
      setDay(nextDay);
      setnDay(dayList[count])
    } else if (timing === "8th") {
        
      nextTiming = "1st";
    }
    
     // Update the day state
    setTiming(nextTiming);
    setnDay(dayList[ntime])
    setCount(count => (count + 1) % 9);
    //setntime(nextTiming)

    let y=JSON.stringify({"day":dayList[dayIndex], "time":timing, "faculty":fac, "subject":su, "year":year, "branch":branch, "section":sec})
    axios.post('http://localhost:6500/insert',{y}).then(res=>{console.log(res.data)}).catch(err=>console.log(err));
    console.log(JSON.parse(y))
  }
  

  return (
    <div className='test1'>
    <center><h1> <span style={{fontSize:"100px"}} >{count}</span>st/th PERIOD OF THE <br/><span style={{fontSize:"100px"}} >{nday}</span></h1></center><a href='/../'><button style={{position:"absolute",top:"5px",right:"4px"}} >LOGOUT</button></a>
      <form style={{marginTop:"0px",marginLeft:"45%",fontSize:"50px"}} >
        {/* <label htmlFor='day'>SELECT DAY:</label>
        <select name='day' id='day'>
          <option>SELECT DAY</option>
          <option value={"MON"}>MON</option>
          <option value={"TUE"}>TUE</option>
          <option value={"WED"}>WED</option>
          <option value={"THU"}>THU</option>
          <option value={"FRI"}>FRI</option>
          <option value={"SAT"}>SAT</option>
        </select> */}
        <label htmlFor='timing'>TIMING:</label>
        <select name="timing" id="per" value={timing} onChange={e => setTiming(e.target.value)} disabled >
          <option value={"1st"}>08:40-09:30</option>
          <option value={"2nd"}>09:30-10:20</option>
          <option value={"3rd"}>10:20-11:10</option>
          <option value={"4th"}>11:10-12:00</option>
          <option value={"5th"}>12:50-01:40</option>
          <option value={"6th"}>01:40-02:30</option>
          <option value={"7th"}>02:30-03:20</option>
          <option value={"8th"}>03:20-04:10</option>
        </select>
        <br/>
        <label htmlFor='timing'>FACULTY:</label>
        <select id='facul' >
          <option value="">SELECT FACULTY</option>
          {faculties.map(faculty => (
            <option key={faculty} value={faculty}>{faculty}</option>
          ))}
        </select>
        <br/>
        <label htmlFor='timing'>SUBJECT:</label>
        <select id='su' >
          <option value="">SELECT SUBJECT</option>
          {subj.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
        <br/>
        <button onClick={handle} id='update' style={{marginLeft:"70px"}} >update</button>
        <button onClick={handle} id='subm' style={{display:"none"}} >update</button>
        
      </form>
    </div>
  );
}
