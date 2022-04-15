import React from 'react';
import './MeEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function MeEventCard2() {
    return (
        <div className="mecard">
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/fd1d47d0728eeef2b89fe5119016e6f3/card.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>CAD Tricks</Card.Title>
                    <Card.Text>Event of making 3D model in solid works of given design</Card.Text>
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

export default MeEventCard2
