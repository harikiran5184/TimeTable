import React, { useState } from 'react';
import axios from 'axios';
import "./admin.css"
import "./home.css"
export default function Edit() {
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [timing, setTiming] = useState('');
  const [sub,setSub]=useState('');
  const [day,setDay]=useState('');
  const [arr,setArr]=useState([]);
  const [faculty,setFaculty]=useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const t=document.getElementById("fac").value;
    axios.post('http://localhost:6500/edit',{branch,year,section,timing,sub,day,t}).then(res=>{
    console.log(t)    
    if(res.data==="done"){
            document.getElementById("up").innerHTML="UPDATE SUCCESSFULL"
            setTimeout(() => {
                window.location.href="/../adminhome"
            }, 2000);
            
        }
    })
  };
  function getperiod(e){
    let newt = [];

    e.preventDefault()
    axios.post('http://localhost:6500/editget',{branch,year,section,timing}).then(res=>{
    fac(branch)    
    for (var i = 0; i < res.data.length; i++) {
            let c=res.data[i].periodname
            newt.push(c)
        }
        let uniqueNewt = [...new Set(newt)];
        console.log(uniqueNewt) 
         for(let i=1;i<10;i++){
            document.getElementById(`${i}`).value=uniqueNewt[i-1];
            document.getElementById(`${i}`).innerHTML=uniqueNewt[i-1];
         }
    }).catch(err=>{console.log(err)})

    fac()
    document.getElementById("sub").style.display="inline"
    document.getElementById("get").style.display="none"
    document.getElementById("branch").disabled="true"
    for(let i=1;i<5;i++){
    document.getElementById(`branch${i}`).disabled="true"
    }
    document.getElementById("subject1").style.display="inline"
    document.getElementById("fac1").style.display="inline"
    document.getElementById("subject").style.display="inline"
    document.getElementById("fac").style.display="inline"
}
  function fac(abranch){
    axios
      .post('http://localhost:6500/test1', { abranch })
      .then((res) => {
        let r=res.data
        r.forEach(element => {
         let tag=document.getElementById("fac");
         const opt=document.createElement("option");
         opt.value=element;
         opt.textContent=element;
         tag.appendChild(opt)
        });
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className='edit' >
    <a href='/../adminhome' ><button style={{position:"fixed",top:"-75px",left:"5px"}} >BACK</button></a>
    <a href='/../' ><button style={{position:"fixed",top:"-75px",right:"5px",width:"180px",height:"40px",borderRadius:"10px"}} >LOGOUT</button></a>

    <center>
    <h1 style={{color:"rgba(175, 5, 221, 1)",fontSize:"50px",margin:"10px"}} >EDIT PAGE</h1>
    <h1 style={{color:"rgba(175, 5, 221, 1)",fontSize:"50px"}} id='up' ></h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='branch'  >BRANCH:</label>
        <select name='branch' id='branch' value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value=''>Select Branch</option>
          <option value='CSE'>CSE</option>
          <option value='CSD'>CSD</option>
          <option value='CSM'>CSM</option>
          <option value='ECE'>ECE</option>
          <option value='EEE'>EEE</option>
          <option value='MECH'>MECH</option>
          <option value='IT'>IT</option>
          <option value='CHEM'>CHEM</option>
        </select>
        <br/>
        <label htmlFor='year'  >YEAR: </label>
        <select name='year' id='branch1' value={year} onChange={(e) => setYear(e.target.value)}>
          <option value=''>Select year</option>
          <option value='1'>1st</option>
          <option value='2'>2nd</option>
          <option value='3'>3rd</option>
          <option value='4'>4th</option>
        </select>
        <br />
        <label htmlFor='section'>SECTION: </label>
        <select name='section' id='branch2' value={section} onChange={(e) => setSection(e.target.value)}>
          <option value=''>Select section</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
        </select>
        <br />
        <label>DAY:</label>
        <select id='branch3' onChange={e=>{setDay(e.target.value)}} >
            <option>select day</option>
            <option value="MON" >MON</option>
            <option value="TUE" >TUE</option>
            <option value="WED" >WED</option>
            <option value="THU" >THU</option>
            <option value="FRI" >FRI</option>
            <option value="SAT" >SAT</option>
        </select>
        <br/>
        <label htmlFor='section'>PERIOD: </label>
        <select id='branch4' name="timing" onChange={(e) => setTiming(e.target.value)} >
        <option>select one</option>
          <option value="1">08:40-09:30</option>
          <option value="2">09:30-10:20</option>
          <option value="3">10:20-11:10</option>
          <option value="4">11:10-12:00</option>
          <option value="5">12:50-01:40</option>
          <option value="6">01:40-02:30</option>
          <option value="7">02:30-03:20</option>
          <option value="8">03:20-04:10</option>
        </select>
        <br/>
        <label name='subject' id='subject1' > SUBJECT</label>
        <select id='subject'  onChange={e=>{setSub(e.target.value)}} >
            <option>select subject</option>
            <option id='1' ></option>
            <option id='2' ></option>
            <option id='3' ></option>
            <option id='4' ></option>
            <option id='5' ></option>
            <option id='6' ></option>
            <option id='7' ></option>
            <option id='8' ></option>
            <option id='9' ></option>
        </select>
        <br/>
        <label htmlFor="fac" id="fac1" >FACULTY:</label>
        <select id="fac" value={faculty}    >
          
        
        </select><br/>
        <button onClick={getperiod} id='get' >get</button><br/>
        <button type='submit' id='sub' style={{display:"none"}} >Submit</button>
      </form>
      </center>
    </div>
  );
}
