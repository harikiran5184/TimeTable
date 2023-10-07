import React, { useEffect, useState } from 'react';
import "./admin.css"
import axios from 'axios';

export default function Test1() {
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');

  const abranch = sessionStorage.getItem('abranch');

  useEffect(() => {
    axios
      .post('http://localhost:6500/test1', { abranch })
      .then((res) => {
        setArr(res.data);
        setSelectedFaculty(res.data[0]); // Select the first option by default
      })
      .catch((e) => console.log(e));
  }, [abranch]);

  function handle(e) {
    e.preventDefault();
    const faculty = selectedFaculty;
    const subject = document.getElementById('sub').value;
    setCount(count + 1);
    const newData = [...data, { count, faculty, subject }];
    setData(newData);
    if (count === 8) {
      console.log('count is 8, logging values...');
      document.getElementById('nxt').style.display = 'none';
      document.getElementById('btn').style.display = 'inline';
    } else if (count === 9) {
      console.log(newData);
      sessionStorage.setItem('facu', JSON.stringify(newData));
      window.location.href = '/../test';
    }
    document.getElementById('sub').value = '';
  }

  const handleSelectChange = (e) => {
    setSelectedFaculty(e.target.value);
  };

  return (
    <div className='test1'>
    <center>
    <h1 style={{fontSize:"70px",color:"rgba(175, 5, 161,.8)"}} >ASSIGN FACULTY</h1>
      <h1 style={{fontSize:"60px"}} >BRANCH:<span style={{textAlign:"center",fontSize:"100px"}} >{abranch.toLowerCase()}</span></h1></center>
      <center><h1  >SUBJECT COUNT:<span style={{fontSize:"60px",marginTop:"0px"}} >{count}</span></h1>
      <span style={{fontSize:"20px",marginTop:"0px",fontStyle:"italic",textDecoration:"underline"}} >note: Every class has 9 subjects only  including labs</span></center>
      <form style={{marginTop:"0px",fontSize:"50px",marginLeft:"42%"}} >
        <label htmlFor="fac" style={{fontSize:"60px"}} >FACULTY:</label>
        <select id="fac" name="fac"  style={{height:"60px"}}  value={selectedFaculty} onChange={handleSelectChange}>
          {arr.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <form style={{marginTop:"0px",fontSize:"30px",marginLeft:"42%"}} >
        <label htmlFor="subject" style={{fontSize:"60px"}} >SUBJECT:</label>
        <input type="text" style={{height:"60px"}} placeholder="Enter subject" id="sub" />
      </form>
      <button id="nxt" onClick={handle} style={{marginLeft:"48%",marginTop:"40px"}} >
        next
      </button>
      <button id="btn" onClick={handle} style={{ display: 'none',marginLeft:"48%" }}>
        submit
      </button>
    </div>
  );
}
