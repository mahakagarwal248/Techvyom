import React from 'react';
import Navbar from '../../navbar/Navbar';
import DesignEventCard from './DesignEventCard';
import DesignEventCard2 from './DesignEventCard2';
import './DesignEvents.css'

function DesignEvents() {
    return (
        <div className="designevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <DesignEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'100vh'}}>
            <DesignEventCard2/>
            </div>
        </div>
    )
}

export default DesignEvents
