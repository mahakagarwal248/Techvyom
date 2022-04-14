import React from 'react';
import Navbar from '../../navbar/Navbar';
import EnEventCard from './EnEventCard';
import EnEventCard2 from './EnEventCard2';
import './EnEvents.css'

function EnEvents() {
    return (
        <div className="enevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <EnEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <EnEventCard2/>
            </div>
        </div>
    )
}

export default EnEvents
