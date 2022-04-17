import React from 'react';
import Navbar from '../../../navbar/Navbar';
import './EnRegister.css';
import { Avatar } from "antd";
import PidDisplay from '../../CsEvents/Register/PidDisplay';

function EnRegister() {
    return (
        <div className="eneventregister">
            <Navbar/>
            <div className="regform">
                <form className="form">
                <Avatar className="avtr" src="https://joeschmoe.io/api/v1/random" />
                <h3>Welcome</h3>
                <input type="text" placeholder="Enter Name" />
                <input type="number" placeholder="Enter Roll Number" />
                <input type="email" placeholder="Enter Email" />
                <input type="telnet" placeholder="Enter Mobile Number" />
                <label>Select Event:-</label>
                <div className="eventselect">
                    <ul>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Aqua Race</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Robo Ramble</li>   
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Drone Race(Art of Flight)</li>
                    </ul>
                    <ul style={{marginLeft:'auto',marginRight:'0px'}}>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Drag & Place</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Junk-Wars(E-Wastes Conversion)</li>
                    </ul>
                </div>
                <br />
                <button type="button" style={{marginBottom:'50px'}}>
                   {<PidDisplay/>}
                </button>
                </form>
            </div>
        </div>
    )
}

export default EnRegister
