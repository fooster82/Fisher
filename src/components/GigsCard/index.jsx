import React from "react";
import './style.css';

 export const GigsCard = ({ date, city, country }) => {
    return (
        <div className={`gig-card`}>
                <p>FISHER</p>
                <h3>When? { date }</h3>
                <h3>Where? { city } in { country }</h3>
        </div>
    )
}