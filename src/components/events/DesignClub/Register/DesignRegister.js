import React from 'react'
import Navbar from '../../../navbar/Navbar';
import './DesignRegister.css'
import { Avatar } from "antd";
import PidDisplay from '../../CsEvents/Register/PidDisplay';

function DesignRegister() {
    return (
        <div className="designeventregister">
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
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Technical Painting</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Multimedia Art</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Best Out of Waste</li>   
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Quill The Techvyom</li>
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

export default DesignRegister
