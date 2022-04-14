import React from 'react';
import './EnEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function EnEventCard() {
    return (
        <div className="encard">
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://resizing.flixster.com/faYhoUQdzNP1kissQ99v8lYDPy4=/300x300/v2/https://flxt.tmsimg.com/assets/p41895_v_h8_ab.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Drone Race (Art of Flight)</Card.Title>
                    <Card.Text>Construct a drone which can reach the destination while flying through hurdles and sharp turns etc</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Aqua Race</Card.Title>
                    <Card.Text>In this the Robots have to move the blocks of wood from one position to another in water</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://hackster.imgix.net/uploads/attachments/1049591/_yYzNRv1GW8.blob?auto=compress%2Cformat&w=400&h=300&fit=min" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Innovation Model</Card.Title>
                    <Card.Text>Build a model related to any field of Electrical, Electronic & Mechanical engineering</Card.Text>
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

export default EnEventCard
