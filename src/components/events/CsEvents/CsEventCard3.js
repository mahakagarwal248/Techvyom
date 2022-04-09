import React from 'react';
import './CsEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function CsEventCard3() {
    return (
        <div className="cscard">
            <Card className="cseventcard">
                <Card.Img variant="top" src="https://assets.infosecurity-magazine.com/webpage/og/55e77508-c4a2-4a71-88aa-60bd5b5749da.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Magazinia</Card.Title>
                    <Card.Text>Design an E-magazine</Card.Text>
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

export default CsEventCard3
