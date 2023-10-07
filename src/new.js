import React,{useState,useEffect} from "react";
import axios from "axios";
function App() {
	const [name,setName]=useState([]);
	const [names,setNames]=useState([]);
	useEffect(() => {
		async function fetchNames() {
		  /* try {
			const response = await axios.get('http://localhost:7000/name');
			setNames(response.data);
		  } catch (error) {
			console.log(error);
		  } */
		  try{
			const response=await axios.get("http://localhost:7000/name");
			setNames(response.data)
		  }
		  catch(e){
			console.log(e)
		  }
		}
		fetchNames()
	  }, []);
	async function submit(e){
		e.preventDefault();
		try{
			console.log(name)
		await axios.post('http://localhost:7000/name',{
			name
		})
		}
		catch(e){
			console.log(e)
		}
	}
	
	
return (
	<div>
		<form action="POST" >
			<input type="text" name='name' onChange={(e)=>{setName(e.target.value)}} />
			<input type="submit" name="submit" onClick={submit} />
		</form>
		<h1>{names}</h1>
	</div>
);
}

export default App;
