import React, { useState } from "react";
import './style.css';
import { heartButton } from '../heartButton'

 export const Card = ({ title, release, artwork }) => {
    const [ released, setReleased ] = useState(true)

    const handleHover = () => setReleased((prevReleased) => !prevReleased)

    return (
        <div 
            onMouseOver = {handleHover}
            onMouseLeave = {handleHover}
            role="switch"
            className={`card`}
        >
                <p>FISHER</p>
                <img src={artwork} alt="album cover" />
                <h3>{title}</h3>
                <em style={{display: released ? 'none' : 'initial'}}>Released in the year {release}</em> <br /> <br />
                <heartButton />
        </div>
    )
}