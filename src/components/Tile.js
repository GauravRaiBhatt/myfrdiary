import React from 'react'
import './styling/tile.css';
import noImage from "../images/no-image.png";

function Tile(props) {
    let sign = '+';
    let color = '#82da7d';//#82da7d
    if(props.gain){
        sign = '-';
        color='#e43b3be6';//#e43b3be6
    }

    return (
        <div className="Tile" style={{backgroundColor :color }}>
           <div className="Tile__img">
               <img src={noImage} alt="Profile " />
           </div>
         
           <div className="Tile__details">
                <span id="name">{props.name}</span>
                <p>{props.lastModified}</p>
                <p >Total : {sign} {props.total}</p>                
           </div>

           <div className="Tile__delete">
               <button>Delete</button>
           </div>
        </div>
    )
}

export default Tile
