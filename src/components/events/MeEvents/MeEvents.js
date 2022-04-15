import React from 'react';
import './MeEvents.css'
import Navbar from '../../navbar/Navbar'
import MeEventCard from './MeEventCard';
import MeEventCard2 from './MeEventCard2'

function MeEvents() {
    return (
        <div className="meevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
                <MeEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'90vh'}}>
                <MeEventCard2/>
            </div>
        </div>
    )
}

export default MeEvents
