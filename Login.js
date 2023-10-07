import React from 'react';
import './Log.css';
import axios from 'axios';
import { useState } from 'react';
export default function Login() {
  const [lusername,setLusername]=useState([])
  const [lpassword,setLpassword]=useState([])
 // const [status,setStatus]=useState([])
  const [susername,setSusername]=useState([])
  const [spassword,setSpassword]=useState([])
  const [sbranch,setSbranch]=useState([])
  const [sphone,setSphone]=useState([])
  function handel(e){
    e.preventDefault();
    try{
      if(lusername=="admin" && lpassword=="admin"){
        sessionStorage.setItem('name',lusername)
          window.location.href="/../adminhome"
        
      }
      else{
        sessionStorage.setItem('name',lusername)
        window.location.href="/../home"
      }
    //    axios.post("http://localhost:6500",{
    //     lusername,lpassword
    // }).then(res=>{
    //   if(res.data==="login successfully 0"){
    //     sessionStorage.setItem('name',lusername)
    //     window.location.href="/../home"
    //   }
    //   else if(res.data==="login successfully 1"){
    //     sessionStorage.setItem('name',lusername)
    //       window.location.href="/../adminhome"
        
    //   }
    //   else{
    //     document.getElementById("indi").innerHTML="LOGIN FAILED CHECK YOUR USER NAME OR PASSWORD";
    //     setTimeout(() => {
    //       document.getElementById("indi").innerHTML="";          
    //     }, 10000);
      // }
    // }
    // )
    // .catch(e=>{console.log(e)})
  }
  catch(e){
    console.log(e)
  }
  }
  
  function handel1(e){
    e.preventDefault()
    try{
      axios.post("http://localhost:6500/signup",{
        susername,sbranch,sphone,spassword
      }).then(res=>{console.log(res.data)
      if(res.data==="signup is successfull"){

        window.location.reload();
      }
      }).catch(e=>{console.log(e)})
    }
    catch(e){
      console.log(e)
    }
  }
  function r(){
    let x=document.getElementById("a1").style;
    let y=document.getElementById('a2').style;
    let z=document.getElementById("a3").style;
    x.left="32%";
    x.backgroundImage="linear-gradient(270deg,white,purple)"
    x.transitionDuration=".9s";
    x.boxShadow="10px 0px 0px purple";
    y.left="38%";
    y.backgroundImage="linear-gradient(270deg,white,purple)"
    y.transitionDuration=".9s";
    y.boxShadow="10px 0px 0px purple";
    z.left="44.5%";
    z.backgroundImage="linear-gradient(270deg,white,purple)"
    z.transitionDuration=".9s";
    z.boxShadow="10px 0px 0px purple";
  }
  function rs(){
    let x=document.getElementById("a1").style;
    let y=document.getElementById('a2').style;
    let z=document.getElementById("a3").style;
    x.left="56%";
    x.backgroundImage="linear-gradient(270deg,white,purple)"
    x.transitionDuration=".9s";
    x.boxShadow="10px 0px 0px purple";
    y.left="63%";
    y.backgroundImage="linear-gradient(270deg,white,purple)"
    y.transitionDuration=".9s";
    y.boxShadow="10px 0px 0px purple";
    z.left="69.5%";
    z.backgroundImage="linear-gradient(270deg,white,purple)"
    z.transitionDuration=".9s";
    z.boxShadow="10px 0px 0px purple";
  }
  function ro(){
    let x=document.getElementById("a1").style;
    let y=document.getElementById('a2').style;
    let z=document.getElementById("a3").style;
    x.left="45%";
    x.backgroundImage="none"
    x.transitionDuration=".9s";
    x.boxShadow="3px 0px 0px rgb(255, 4, 230)";
    y.left="52%";
    y.backgroundImage="none"
    y.transitionDuration=".9s";
    y.boxShadow="3px 0px 0px rgb(255, 4, 230)";
    z.left="59%";
    z.backgroundImage="none"
    z.transitionDuration=".9s";
    z.boxShadow="3px 0px 0px rgb(255, 4, 230)";
  }
  return (
    <div style={{width:"100%",height:"100vh"}}>
    <h3 style={{color:"red",textAlign:"center"}} id='indi' ></h3>
    <center><h1 style={{color:"rgba(255, 4, 230,.5)",fontSize:"50px"}} >TIME-TABLE</h1></center>
    <div className='log a1' id='a1' ></div>
    <div className='log a2' id='a2' ></div>
    <div className='log a3' id='a3' ></div>
      <div  className='login main' id='login' onMouseOver={r} onMouseOut={ro}>
        <h1>Login</h1>
        <form>
          <label>Username :</label>
          <input type='text' placeholder='Enter your Username' onChange={(e)=>{setLusername(e.target.value)}}  name='username'></input><br/>
          <label>Password :</label>
          <input type='password' placeholder='Enter your Password' onChange={(e)=>{setLpassword(e.target.value)}} className='pass'  name='Password'></input><br/>
          <button onClick={handel} name='submit'>Login</button>
        </form>
      </div>
      {/* <div  className='ic' id='ic' ><h1>^</h1></div> */}
      <div className='login one'  id='sign' onMouseOver={rs} onMouseOut={ro}>
        <h1>Signup</h1>
        <form onSubmit={handel1} >
          <label>Username :</label>
          <input type='text' placeholder='Enter your Username' onChange={e=>setSusername(e.target.value)} name='username'></input><br/>
          <label className='e1'>Branch :</label>
          <select name='branch' onChange={e=>setSbranch(e.target.value)} className='pass'>
            <option>Select Branch</option>
            <option>CSE</option>
            <option>CSD</option>
            <option>CSM</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MECH</option>
            <option>IT</option>
            <option>CHEM</option>
          </select><br/>
          <label className='e'>Phone :</label>
          <input type='tel' placeholder='Enter your Phone no' name='phno' onChange={e=>setSphone(e.target.value)} className='pass'></input><br/>
          <label>Password :</label>
          <input type='password' placeholder='Enter your Password' className='pass' onChange={e=>setSpassword(e.target.value)}  name='Password'></input><br/>
          <button type='submit' name='submit'>Sign UP</button>
          
        </form>
      </div>
    </div>
  )
}