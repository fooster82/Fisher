import React, { useState, useEffect } from "react";
import axios from 'axios';
import { GigsCard } from '../../components/GigsCard';

export function Gigs() {
    const [ gigs, setGigs ] = useState([]);    
    useEffect(() => {
        const fetchGigs = async () => {
            try {
                let opts = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get('https://rest.bandsintown.com/artists/fisher/events?app_id=510', opts);
                // setGigs([data])
                
                    let gigData = [];
                    for(let i=0 ; i<data.length; i++) {
                        gigData[i] = [data[i].datetime.slice(0,10), data[i].venue.city, data[i].venue.country]
                    }
                setGigs(gigData)
            } catch(err) {
                console.warn(err);
            }
        }
        fetchGigs()
        
    }, [])
    const renderGigs = () => gigs.map((g,i) => <GigsCard key={i} date={g[0]} city={g[1]} country={g[2]}/>)

    return (
        <div>
            { renderGigs() }
        </div>
    )
}

