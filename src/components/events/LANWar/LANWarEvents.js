import React from 'react'
import './LANWarEvents.css'
import Navbar from '../../navbar/Navbar'
import LANWarEventCard from './LANWarEventCard'

function LANWarEvents() {
    return (
        <div className="lanwarevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'100vh'}}>
                <LANWarEventCard/>
            </div>
        </div>
    )
}

export default LANWarEvents
