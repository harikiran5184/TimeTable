import React, { useState } from 'react'
import "./admin.css"
export default function Admin() {
    const [branch,setBranch]=useState([])
    const [year,setYear]=useState([])
    const [section,setSection]=useState([])
    const data=sessionStorage.getItem('name')
  if(data===""){
    window.location.href="/../"
  }
    function handel(e){
        e.preventDefault()
        console.log(branch,year,section)
        sessionStorage.setItem("abranch",branch)
        sessionStorage.setItem("ayear",year)
        sessionStorage.setItem("asection",section)
        window.location.href="/../admin/assign"
    }
    function create(){
        sessionStorage.setItem("abranch",branch)
        sessionStorage.setItem("ayear",year)
        sessionStorage.setItem("asection",section)
        window.location.href="/../test1"
    }
    function rs(){
        sessionStorage.setItem("name","")
        window.location.href="/../"
      }
  return (
    <div className='admin' >
    <a href='/../adminhome' ><button style={{position:"fixed",top:"5px",left:"-44%"}} >BACK</button></a>
    <div className='log a1' id='a1' ></div>
    <div className='log a2' id='a2' ></div>
    <div className='log a3' id='a3' ></div>
    <a href='/../' ><button style={{position:"fixed",top:"-10px",right:"4px"}} onClick={rs} >LOGOUT</button></a>
        <form onSubmit={handel} >
        <label htmlFor='branch'  >BRANCH:</label>
        <select name='branch' onChange={e=>{setBranch(e.target.value)}} >
            <option>Select Branch</option>
            <option>CSE</option>
            <option>CSD</option>
            <option>CSM</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MECH</option>
            <option>IT</option>
            <option>CHEM</option>
          </select>
          <br/>
            <label htmlFor='year' >YEAR: </label>
            <select name='year' onChange={e=>{setYear(e.target.value)}} >
            <option>Select year</option>
                <option value={"1"} >1st</option>
                <option value={"2"} >2nd</option>
                <option value={"3"} >3rd</option>
                <option value={"4"} >4th</option>
            </select>
            <br/>
            <label htmlFor='section'  >SECTION: </label>
            <select name='section' onChange={e=>{setSection(e.target.value)}} >
            <option>Select section</option>
                <option value={"A"} >A</option>
                <option value={"B"} >B</option>
                <option value={"C"} >C</option>
            </select>
            <br/>
            
        </form>
        <button onClick={create} className='create' >CREATE</button>
    </div>
  )
}
