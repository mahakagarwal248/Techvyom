import React from 'react';
import './Cards.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Card2() {
    return (
        <div className="bcard">
            <Link to="en-events" style={{textDecoration:'none'}}>
                {""}
            <Card className="branchcard">
                <Card.Img variant="top" src="https://tdan.com/wp-content/uploads/2022/04/ART01x-feature-image-edited.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>EN Competitions</Card.Title>
                    <Card.Text>By Synergy Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="pharma-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pharmacy Competitions</Card.Title>
                    <Card.Text>By Pharmquimica Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Card2
