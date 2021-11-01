import React from "react";
import './style.css';

 export const Card = ({ title, release }) => {
    return (
        <div className={`card`}>
            <p>FISHER</p>
            <h3>{title}</h3>
            <em>Released in the year {release}</em>
        </div>
    )
}