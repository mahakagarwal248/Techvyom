import React from 'react';
import './PharmaEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function PharmaEventCard() {
    return (
        <div className="pharmacard">
            <Card className="pharmaeventcard">
                <Card.Img variant="top" src="https://img.etimg.com/thumb/msid-88542497,width-300,imgsize-59552,,resizemode-4,quality-100/climate-change.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Collage-O-Fact(Collage Making)</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="pharmaeventcard">
                <Card.Img variant="top" src="https://blog.udemy.com/wp-content/uploads/2013/06/bigstock-Idea-Concept-42988369-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pioneerdom (Startup Ideas)</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="pharmaeventcard">
                <Card.Img variant="top" src="https://i.ebayimg.com/images/g/wxoAAOSwkBZZnT07/s-l300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pharmesquisser (Pencil Sketch Painting)</Card.Title>
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

export default PharmaEventCard
