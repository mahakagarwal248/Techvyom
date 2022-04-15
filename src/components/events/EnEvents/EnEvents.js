import React from 'react';
import Navbar from '../../navbar/Navbar';
import EnEventCard from './EnEventCard';
import EnEventCard2 from './EnEventCard2';
import './EnEvents.css'

function EnEvents() {
    return (
        <div className="enevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
            <EnEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'90vh'}}>
            <EnEventCard2/>
            </div>
        </div>
    )
}

export default EnEvents
