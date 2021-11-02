import React, { useState } from 'react';
// import './style.css';

export function Button() {
        const [ faved, setFaved ] = useState(false);
        const handleClick = () => setFaved((prevFaved) => !prevFaved);    
        
        return (
        <div>
            <button
                onClick={handleClick}
                role="switch"
                style={{ color: faved ? 'red' : 'grey' }}
            >&hearts;</button>
        </div>
    )
}

