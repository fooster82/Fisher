import React from 'react';
import { Album } from './Album';
import { Card } from './Card';

const albums = [
    { title: 'Freaks', release: 2020},
    { title: 'losing it', release: 2018},
    { title: 'Oi Oi', release: 2017}
]

export default function Artist() {
    const renderAlbums = () => albums.map(a => <Album title={a.title} release={a.release}/>)
    return (
        <div id='artist-div'>
            <h1>Fisher</h1>
            <h2>Music type: Tech-House</h2>
            <h3>Fisher was born and raised on the Gold Coast of Australia, where he pursued a career as a professional surfer for many years.</h3>
            <ol>
                { renderAlbums() }
            </ol>
        </div>
    )
}
