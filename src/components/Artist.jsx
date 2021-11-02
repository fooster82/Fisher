import React from 'react';
import { Card } from './Card/index';

const albums = [
    { title: 'Freaks', release: 2020, artwork: ''},
    { title: 'Losing it', release: 2018, artwork: ''},
    { title: 'Oi Oi', release: 2017, artwork: './Card/assets/oioi_fisher.jpg'}
]

export function Artist() {
    const renderAlbums = () => albums.map((a,i) => <Card key={i} title={a.title} release={a.release} artwork={a.artwork}/>)
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
