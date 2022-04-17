import React from 'react'
import Navbar from '../../../navbar/Navbar';
import './LANWarRegister.css'
import { Avatar } from "antd";
import PidDisplay from '../../CsEvents/Register/PidDisplay';

function LANWarRegister() {
    return (
        <div className="lanwareventregister">
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
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Battleground (BGMI)</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>FIFA</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Mini Militia</li>   
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

export default LANWarRegister
