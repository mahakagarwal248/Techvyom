import React from 'react'
import Navbar from '../../navbar/Navbar'
import EcEventCard from './EcEventCard';
import EcEventCard2 from './EcEventCard2';
import './EcEvents.css';

function EcEvents() {
    return (
        <div className="ecevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <EcEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <EcEventCard2/>
            </div>
        </div>
    )
}

export default EcEvents
