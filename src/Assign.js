import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Assign() {
  const [sdata,setSdata]=useState([])
  const [mon1,setMon1]=useState([])
  const [mon2,setMon2]=useState([])
  const [mon3,setMon3]=useState([])
  const [mon4,setMon4]=useState([])
  const [mon5,setMon5]=useState([])
  const [mon6,setMon6]=useState([])
  const [mon7,setMon7]=useState([])
  const [mon8,setMon8]=useState([])
  const ayear=sessionStorage.getItem("ayear")
    const abranch=sessionStorage.getItem("abranch")
    const asection=sessionStorage.getItem("asection")
    const data=sessionStorage.getItem('name')
  if(data===""){
    window.location.href="/../"
  }
    function se(){
      sessionStorage.setItem("name","")
      window.location.href="/../"
    }
  try{
  useEffect(()=>  {  
    //console.log(ayear,abranch,asection)
    let newt = [];
axios.post('http://localhost:6500/assign',{abranch,ayear,asection})
.then(res => {
  //console.log(res.data);
  for (var i = 0; i < res.data.length; i++) {
    //console.log(res.data[i]);
    var day = res.data[i].day.toLowerCase();
    document.getElementById(`${day}${res.data[i].period}`).value = res.data[i].periodname;
    document.getElementById(`${day}${res.data[i].period}`).disabled=true;
    let c = res.data[i].periodname+","+res.data[i].faculty;
    newt.push(c);
  }
  let uniqueNewt = [...new Set(newt)];
  for(var i=0;i<9;i++){
    var n = uniqueNewt[i].indexOf(",")
    document.getElementById(`${i}`).value=uniqueNewt[i].slice(n+1);
    document.getElementById(`s${i}`).value=uniqueNewt[i].slice(0,n);
    document.getElementById(`${i}`).disabled=true;
    document.getElementById(`s${i}`).disabled=true;
  }
  //console.log(uniqueNewt[0]);
  setSdata({"branch": res.data[0].branch, "section": res.data[0].section});

})
.catch(e => {
  console.log(e);
});

    },[])
  }
  catch (e){
    console.log(e)
  }
  function handel(e){
    e.preventDefault()
    //console.log(mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8);
  }
  function y(e){
    e.preventDefault()

  }
  return (
    <div className='ass' >
    <a href='/../admincheck' ><button style={{position:"fixed",top:"-7%",left:"-49%"}} >BACK</button></a>
        <center><h1>TIME TABLE OF <span>{ayear}/4</span> {abranch}-{asection}</h1></center>
        <a href='/../' ><button style={{position:"fixed",top:"-100px",right:"5px"}} onClick={se} >LOGOUT</button></a>
        <div>
          <form >
            <table>
            <thead>
              <tr><th className='no' >DAYS</th><th>8:40-9:30</th><th>9:30-10:20</th><th>10:20-11:10</th><th>11:10-12:00</th><th>12:00-12:50</th><th>12:50-1:40</th><th>1:40-2:30</th><th>2:30-3:20</th><th>3:20-4:10</th></tr>
              </thead>
              <tbody>
              <tr><th className='no' >MON</th><th><input type='text' name='mon1' id='mon1'  onChange={e=>setMon1(e.target.value)} ></input></th><th><input type='text' name='mon2' id='mon2' onChange={e=>setMon2(e.target.value)} ></input></th><th><input type='text' name='mon3' id='mon3'  onChange={e=>setMon3(e.target.value)} ></input></th><th><input type='text' name='mon4' id='mon4' onChange={e=>setMon4(e.target.value)} ></input></th><th>LUNCH</th><th><input type='text' name='mon5' id='mon5'  onChange={e=>setMon5(e.target.value)} ></input></th><th><input type='text' name='mon6' id='mon6'  onChange={e=>setMon6(e.target.value)} ></input></th><th><input type='text' name='mon7' id='mon7' onChange={e=>setMon7(e.target.value)} ></input></th><th><input type='text' name='mon8' id='sat8' onChange={e=>setMon8(e.target.value)} ></input></th></tr>
              <tr><th className='no' >TUE</th><th><input type='text' name='tue1' id='tue1' ></input></th><th><input type='text' name='tue2' id='tue2' ></input></th><th><input type='text' name='tue3' id='tue3' ></input></th><th><input type='text' name='tue4' id='tue4'  ></input></th><th>LUNCH</th><th><input type='text' name='tue5' id='tue5' ></input></th><th><input type='text' name='tue6' id='tue6' ></input></th><th><input type='text' name='tue7' id='tue7'  ></input></th><th><input type='text' name='tue8' id='tue8' ></input></th></tr>
              <tr><th className='no' >WED</th><th><input type='text' name='wed1' id='wed1' ></input></th><th><input type='text' name='wed2' id='wed2' ></input></th><th><input type='text' name='wed3' id='wed3' ></input></th><th><input type='text' name='wed4' id='wed4'></input></th><th>LUNCH</th><th><input type='text' name='wed5'  id='wed5' ></input></th><th><input type='text' name='wed6' id='wed6' ></input></th><th><input type='text' name='wed7' id='wed7' ></input></th><th><input type='text' name='wed8' id='wed8' ></input></th></tr>
              <tr><th className='no' >THU</th><th><input type='text' name='thu1' id='thu1' ></input></th><th><input type='text' name='thu2' id='thu2' ></input></th><th><input type='text' name='thu3' id='thu3' ></input></th><th><input type='text' name='thu4' id='thu4' ></input></th><th>LUNCH</th><th><input type='text' name='thu5' id='thu5' ></input></th><th><input type='text' name='thu6' id='thu6'  ></input></th><th><input type='text' name='thu7' id='thu7' ></input></th><th><input type='text' name='thu8' id='thu8' ></input></th></tr>
              <tr><th className='no' >FRI</th><th><input type='text' name='thu1' id='fri1' ></input></th><th><input type='text' name='thu2' id='fri2' ></input></th><th><input type='text' name='thu3' id='fri3' ></input></th><th><input type='text' name='thu4' id='fri4' ></input></th><th>LUNCH</th><th><input type='text' name='thu5' id='fri5' ></input></th><th><input type='text' name='thu6' id='fri6'  ></input></th><th><input type='text' name='thu7' id='fri7' ></input></th><th><input type='text' name='thu8' id='fri8' ></input></th></tr>
              <tr><th className='no' >SAT</th><th><input type='text' name='thu1' id='sat1' ></input></th><th><input type='text' name='thu2' id='sat2' ></input></th><th><input type='text' name='thu3' id='sat3' ></input></th><th><input type='text' name='thu4' id='sat4' ></input></th><th>LUNCH</th><th><input type='text' name='thu5' id='sat5' ></input></th><th><input type='text' name='thu6' id='sat6' ></input></th><th><input type='text' name='thu7' id='sat7' ></input></th><th><input type='text' name='thu8' id='mon8' ></input></th></tr>
              </tbody>
          </table>
          <table className='fac' >
            <thead>
            <tr><th>FACULTY</th><th>SUBJECT</th></tr>
            </thead>
            <tbody>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='0' ></input></th><th><input id='s0' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='1' ></input></th><th><input id='s1' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='2' ></input></th><th><input id='s2' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='3' ></input></th><th><input id='s3' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='4' ></input></th><th><input id='s4' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='5' ></input></th><th><input id='s5' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='6' ></input></th><th><input id='s6' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              {/* <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='7' ></input></th><th><input id='s7' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
              <tr><th><input type='text' name='faculty1' placeholder='faculty name' id='8' ></input></th><th><input id='s8' type='text' name='faculty1' placeholder='subject name' ></input></th></tr>
 */}
            </tbody>
          </table>
          <button onClick={y} style={{position:"absolute",left:"35%"}} >edit</button>
          <button onClick={handel} >UPDATE</button>
          </form>
        </div>
    </div>
  )
}
