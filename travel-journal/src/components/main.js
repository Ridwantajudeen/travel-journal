import React from "react"
import location from "./location.png"


function Main(props){
    return (
        <div className="main">
            <img src={props.image} alt='' className="image" />
            <div className="stats">
                
            <img src = {location} alt='' className="locate" />
            <h1 className="location">{props.location}</h1>
            <a href= {props.map} className="map">View on Google Map</a>
            <h1 className="place">{props.place}</h1>
            <h1 className="date">{props.date}</h1>
            <h1 className="description">{props.description}</h1>
            </div>


        </div>
    )
}

export default Main;