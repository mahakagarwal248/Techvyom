import React from 'react';
import './Cards.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Card3() {
    return (
        <div className="bcard">
            <Link to="mrc-events" style={{textDecoration:'none'}}>
                {""}
            <Card className="branchcard">
                <Card.Img variant="top" src="https://www.mmdbservices.com/wp-content/uploads/2022/01/A-girl-trying-to-understand-media-relations-management-services-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>MRC Club</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            <Link to="literary-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Literary Club</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            <Link to="design-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://blog.flatworldsolutions.com/files/2019/11/top-mechanical-engineering-trends-to-watch-out-for-in-2020.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Design Club</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Card3
