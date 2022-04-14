import React from 'react';
import './MeEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function MeEventCard() {
    return (
        <div className="mecard">
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://resizing.flixster.com/faYhoUQdzNP1kissQ99v8lYDPy4=/300x300/v2/https://flxt.tmsimg.com/assets/p41895_v_h8_ab.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Glider Plane Design</Card.Title>
                    <Card.Text>Design & build a Glider Plain made of BalsaWood, which will be launched by using a hand</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Chain Reaction</Card.Title>
                    <Card.Text></Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://hackster.imgix.net/uploads/attachments/1049591/_yYzNRv1GW8.blob?auto=compress%2Cformat&w=400&h=300&fit=min" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Car War (Warrior)</Card.Title>
                    <Card.Text>Design a remote control car wireless & compete with others</Card.Text>
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

export default MeEventCard
