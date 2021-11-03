import React, { useState, useEffect } from "react";
import axios from 'axios';

export const GigsCard = () => {
    const [ gigs, setGigs ] = useState([])
    
    useEffect(() => {
        const fetchGigs = async () => {
            try {
                let opts = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get('https://rest.bandsintown.com/artists/fisher/events?app_id=510', opts);
                setGigs(data.datetime)
                console.log(data.description)
            } catch(err) {
                console.warn(err);
            }
        }
        fetchGigs()
        
    }, [])
    return (
        gigs.map(gig => {
            <div>
                <h1>Upcoming gigs</h1>
                <p>{gig.datetime}, </p>
            </div>
        })
    )
}

