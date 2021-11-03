import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Artist } from './pages/home/Artist';
import { Gigs } from './pages/gigs/Gigs';

export default function App() {
    return (
        <>        
        <Switch>
            <Route exact path="/">
            <Artist />
            </Route>

            <Route path="/gigs">
            <Gigs />
            </Route>

            <Route>
            <h1>This page does not exist, kindly leave.</h1>
            </Route>
        </Switch>
            
        </>
    )
}
