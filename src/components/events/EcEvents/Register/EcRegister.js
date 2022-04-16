import React from 'react';
import Navbar from '../../../navbar/Navbar';
import './EcRegister.css'
import { Avatar } from "antd";

function EcRegister() {
    return (
        <div className="eceventregister">
            <Navbar/>
            <div className="regform">
                <form className="form">
                <Avatar className="avtr" src="https://joeschmoe.io/api/v1/random" />
                <h3>Welcome</h3>
                <input type="text" placeholder="Enter Name" />
                <input type="number" placeholder="Enter Roll Number" />
                <input type="email" placeholder="Enter Email" />
                <input type="telnet" placeholder="Enter Mobile Number" />
                <label>Select Course</label>
                <div className="courseselect">
                    <ul>
                        <li><input type="radio" name="course" />B.Tech</li>
                        <li><input type="radio" name="course"/>B.Pharma</li>
                        <li><input type="radio" name="course"/>MCA</li>
                        <li><input type="radio" name="course"/>MBA</li>
                    </ul>
                </div>
                <label>Select Batch</label>
                <div className="yearselect">
                    <ul>
                        <li><input type="radio" name="year"/>2018</li>
                        <li><input type="radio" name="year"/>2019</li>
                        <li><input type="radio" name="year"/>2020</li>
                        <li><input type="radio" name="year"/>2021</li>
                    </ul>
                </div>
                <label>Select Event:-</label>
                <div className="eventselect">
                    <ul>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Robo War (Ran Bhumi)</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Robo Race</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Line Follower Robot</li>   
                    </ul>
                    <ul style={{marginLeft:'auto',marginRight:'0px'}}>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Robo Soccer</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Maze Solver</li>
                    </ul>
                </div>
                <br />
                <button>
                    Register
                </button>
                </form>
            </div>
        </div>
    )
}

export default EcRegister
