import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "./home.css"
export default function Home() {
  const [mon1,setMon1]=useState([])
  const data=sessionStorage.getItem('name')
  if(data===""){
    window.location.href="/../"
  }
  try{
    useEffect(()=>{
      const date=new Date()
      const day=date.getDay()
      const dayarray=["mon","tue","wed","thu","fri","sat"]
      let dayw=dayarray[day-1]
      document.getElementById(dayw).style.backgroundColor="rgba(15, 5, 161, 0.3)";

   axios.post('http://localhost:6500/data',{
    "name":data,"branch":"CSE"
  })
   .then(res=>{
    for(var i=0;i<res.data.length;i++){
      //console.log(res.data[i].periodname)
      console.log(res.data[i])
      var day=res.data[i].day.toLowerCase();
      document.getElementById(`${day}${res.data[i].period}`).innerHTML=res.data[i].periodname+`  <span> for ${res.data[i].year}-${res.data[i].section}</span>`;
      //console.log(res.data[i].period)

    }
    
    }).catch(e=>{console.log(e)})
  })
  }
  catch(e){console.log(e)}
function se(){
  sessionStorage.setItem("name","")
  window.location.href="/../"
}
  return (
    <div>
      <div className='ani1' ></div>
      <div className='ani2' ></div>
      <div className='ani3' ></div>
        <center><h1 style={{fontSize:"100px",marginTop:"20px"}} >TIME TABLE</h1></center>
        <div>
        <a href='/../home' ><button style={{width:"200px",position:"fixed",top:"-110px",right:"390px"}} >Home</button></a>
        <a><button style={{width:"200px",position:"fixed",top:"-110px",right:"180px"}} >Notifications</button></a>
        <a href='/../' className='logout' onClick={se} ><button>LOGOUT</button></a>
        </div>
        <center>
        <div className='time-tabel' >
            <table className='t' id='t' >
              <thead>
              <tr><th className='no' >DAYS</th><th>8:40-9:30</th><th>9:30-10:20</th><th>10:20-11:10</th><th>11:10-12:00</th><th>12:00-12:50</th><th>12:50-1:40</th><th>1:40-2:30</th><th>2:30-3:20</th><th>3:20-4:10</th></tr>
              </thead>
              <tbody>
              <tr id='mon' ><th className='no' >MON</th><th><h4  type='text' name='mon1' id='mon1' ></h4></th><th><h4 type='text' name='mon2' id='mon2' ></h4></th><th><h4 type='text' name='tue3' id='mon3' ></h4></th><th><h4 type='text' name='tue4' id='mon4'  ></h4></th><th>L</th><th><h4 type='text' name='tue5' id='mon5' ></h4></th><th><h4 type='text' name='tue6' id='mon6' ></h4></th><th><h4 type='text' name='tue7' id='mon7'  ></h4></th><th><h4 type='text' name='tue8' id='mon8' ></h4></th></tr>
              <tr id='tue' ><th className='no' >TUE</th><th><h4  type='text' name='tue1' id='tue1' ></h4></th><th><h4 type='text' name='tue2' id='tue2' ></h4></th><th><h4 type='text' name='tue3' id='tue3' ></h4></th><th><h4 type='text' name='tue4' id='tue4'  ></h4></th><th>U</th><th><h4 type='text' name='tue5' id='tue5' ></h4></th><th><h4 type='text' name='tue6' id='tue6' ></h4></th><th><h4 type='text' name='tue7' id='tue7' ></h4></th><th><h4 type='text' name='tue8' id='tue8' ></h4></th></tr>
              <tr id='wed' ><th className='no' >WED</th><th><h4  type='text' name='wed1' id='wed1' ></h4></th><th><h4 type='text' name='wed2' id='wed2' ></h4></th><th><h4 type='text' name='wed3' id='wed3' ></h4></th><th><h4 type='text' name='wed4' id='wed4'></h4></th><th>N</th><th><h4 type='text' name='wed5'  id='wed5' ></h4></th><th><h4 type='text' name='wed6' id='wed6' ></h4></th><th><h4 type='text' name='wed7' id='wed7' ></h4></th><th><h4 type='text' name='wed8' id='wed8' ></h4></th></tr>
              <tr id='thu' ><th className='no' >THU</th><th><h4 type='text' name='thu1' id='thu1' ></h4></th><th><h4 type='text' name='thu2' id='thu2' ></h4></th><th><h4 type='text' name='thu3' id='thu3' ></h4></th><th><h4 type='text' name='thu4' id='thu4' ></h4></th><th>C</th><th><h4 type='text' name='thu5' id='thu5' ></h4></th><th><h4 type='text' name='thu6' id='thu6'  ></h4></th><th><h4 type='text' name='thu7' id='thu7' ></h4></th><th><h4 type='text' name='thu8' id='thu8' ></h4></th></tr>
              <tr id='fri' ><th className='no' >FRI</th><th><h4 type='text' name='thu1' id='fri1' ></h4></th><th><h4 type='text' name='thu2' id='fri2' ></h4></th><th><h4 type='text' name='thu3' id='fri3' ></h4></th><th><h4 type='text' name='thu4' id='fri4' ></h4></th><th>H</th><th><h4 type='text' name='thu5' id='fri5' ></h4></th><th><h4 type='text' name='thu6' id='fri6'  ></h4></th><th><h4 type='text' name='thu7' id='fri7' ></h4></th><th><h4 type='text' name='thu8' id='fri8' ></h4></th></tr>
              <tr id='sat' ><th className='no' >SAT</th><th><h4 type='text' name='thu1' id='sat1' ></h4></th><th><h4 type='text' name='thu2' id='sat2' ></h4></th><th><h4 type='text' name='thu3' id='sat3' ></h4></th><th><h4 type='text' name='thu4' id='sat4' ></h4></th><th>LUNCH</th><th><h4 type='text' name='thu5' id='sat5' ></h4></th><th><h4 type='text' name='thu6' id='sat6' ></h4></th><th><h4 type='text' name='thu7' id='sat7' ></h4></th><th><h4 type='text' name='thu8' id='sat8' ></h4></th></tr>
              </tbody>
            </table>
        </div>
        <div>
          <table className='av' id='av' >
            {/* <tr><th>AVAILABLE FACULTY</th><th>SUB</th></tr> */}
          </table>
        </div>
        </center>
    </div>
  )
}
