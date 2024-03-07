import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[city,setCity]=useState();
  const[result,setResult]=useState();
  const handlechange=(e)=>{
    setCity(e.target.value)
  }
  const handlesubmit=(e)=>{
e.preventDefault();
// console.log(city)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
.then(response=>{
  if(!response.ok){
    throw new Error ("city not found")
  }
  return response.json();
})

.then(data=>{
  const kelvin= data.main.temp;
  const celsius=kelvin-273.15;
  setResult("Temperature at "+city+Math.round(celsius)+ '°C');
}

)
.catch(()=>{
setResult("city not found")
})
setCity("")
  }
  return (
    <div>
      <center>
        <div className="card">
          <img src="cloudy.webp"style={{width:"60%"}} alt="" />
          <div className="card-body">
            <div className="card-title"><span>Weather App</span></div>
            <form action="#" onSubmit={handlesubmit}>
              <input type="text" name='city' value={city} onChange={handlechange}/> <br />
              <input type="submit" value="Get Temperature" />

            </form>
            <h1>{result}</h1>

          </div>
        </div>
      </center>
     
    </div>
  );
}

export default App;
