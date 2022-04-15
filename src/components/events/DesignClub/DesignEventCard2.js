import React from 'react';
import './DesignEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function DesignEventCard2() {
    return (
        <div className="designcard">
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://resizing.flixster.com/faYhoUQdzNP1kissQ99v8lYDPy4=/300x300/v2/https://flxt.tmsimg.com/assets/p41895_v_h8_ab.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Quill The Techvyom</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DesignEventCard2
