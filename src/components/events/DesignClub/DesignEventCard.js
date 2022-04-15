import React from 'react';
import './DesignEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function DesignEventCard() {
    return (
        <div className="designcard">
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://render.fineartamerica.com/images/rendered/square-product/small/images/artworkimages/mediumlarge/1/tech-symbol-leon-zernitsky.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Technical Painting</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Multimedia Art</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://hackster.imgix.net/uploads/attachments/1049591/_yYzNRv1GW8.blob?auto=compress%2Cformat&w=400&h=300&fit=min" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Best Out of Waste</Card.Title>
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

export default DesignEventCard
