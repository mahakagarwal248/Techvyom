import React from 'react'
import Navbar from '../../navbar/Navbar';
import PharmaEventCard from './PharmaEventCard';
import './PharmaEvents.css'

function PharmaEvents() {
    return (
        <div className="pharmaevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
                <PharmaEventCard/>
            </div>
        </div>
    )
}

export default PharmaEvents
