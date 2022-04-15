import React from 'react';
import './OpenEvents.css'
import Navbar from '../../navbar/Navbar'
import OpenEventCard from './OpenEventCard';
import OpenEventCard2 from './OpenEventCard2';

function OpenEvents() {
    return (
        <div className="openevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
            <OpenEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'90vh'}}>
            <OpenEventCard2/>
            </div>
        </div>
    )
}

export default OpenEvents
