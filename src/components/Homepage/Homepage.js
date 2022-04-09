import React from 'react';
import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3';
import Card4 from '../Card/Card4';
import Cards from '../Card/Cards';
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <h1>Events Presented</h1>
            <h2 style={{marginTop:'50px'}}>Branch-wise Events</h2>
            <div style={{height:'80vh'}}>
            <Cards/>
            </div>
            <div style={{height:'80vh'}}>
            <Card2/>
            </div>
            <h2>Events organised by common clubs</h2>
            <div style={{height:'80vh'}}>
            <Card3/>
            </div>
            <div style={{height:'80vh'}}>
            <Card4/>
            </div>
        </div>
    )
}

export default Homepage
