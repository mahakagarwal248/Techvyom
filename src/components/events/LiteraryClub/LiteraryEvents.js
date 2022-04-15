import React from 'react';
import Navbar from '../../navbar/Navbar';
import LiteraryEventCard from './LiteraryEventCard';
import LiteraryEventCard2 from './LiteraryEventCard2';
import './LiteraryEvents.css';

function LiteraryEvents() {
    return (
        <div className="literaryevents">
            <Navbar/>
            <div style={{paddingTop:'6%',height:'80vh'}}>
            <LiteraryEventCard/>
            </div>
            <div style={{paddingTop:'6%',height:'90vh'}}>
            <LiteraryEventCard2/>
            </div>
        </div>
    )
}

export default LiteraryEvents
