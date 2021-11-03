import React from 'react';
import { Card } from '../../components/Card/index';

const albums = [
    { title: 'Freaks', release: 2020, artwork: 'https://www.edmtunes.com/wp-content/uploads/2020/03/FISHER_FREAKS_EP_WF3_logo5-1-scaled.jpg'},
    { title: 'Losing it', release: 2018, artwork: 'https://static.qobuz.com/images/covers/5a/ot/apgv94yjoot5a_600.jpg'},
    { title: 'Oi Oi', release: 2017, artwork: 'https://cdn.shopify.com/s/files/1/2667/5284/files/oi_oi_large.jpg?v=1516818157'}
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
