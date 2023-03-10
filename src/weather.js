import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
 function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main,temp);
    setReady(true);
}

if (ready) {
return (
       <div className="Weather">
        <form>
            <div className="row">
                <div className="col-8">
            <input type="search" placeholder="Enter a city" className="form-control"
            autoFocus="on" />
            </div>
            <div className="col-4">
            <input type="submit" value="Search"
            className="btn btn-primary w-80"/>
            </div>
            </div>
        </form>
        
        <h1>New York</h1>
        <ul>
            <li> Wednesday 07:00</li>
            <li> Mostly Cloudy</li>
        </ul>
       <div className="row mt-3">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" 
             />
           <span className="temperature">6</span> 
           <span className="unit">℃</span> 
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Precipitation:15%
                </li>
                <li>Humidity:72%</li>
                <li>Wind:13km/h</li>
            </ul>
        </div>
       </div>
       </div> 
    );

 }  else {
 const apiKey= "3b25cc29b00af835bb4424cb9bd16b6c";
 let city = "New York";
    let apiUrl= 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
 }  
} 