import React from 'react';
import Navbar from '../../../navbar/Navbar';
import './Register.css'
import { Avatar } from "antd";
import PidDisplay from './PidDisplay';

function Register() {
    return (
        <div className="eventregister">
            <Navbar/>
            <div className="regform">
                <form className="form">
                <Avatar className="avtr" src="https://joeschmoe.io/api/v1/random" />
                <h3>Welcome</h3>
                <input type="text" placeholder="Enter Name" id="name" required={true}/>
                <input type="number" name="rollnumber" placeholder="Enter Roll Number" required={true}/>
                <input type="email" placeholder="Enter Email" required={true}/>
                <input type="telnet" placeholder="Enter Mobile Number" required={true}/>
                <label>Select Event:-</label>
                <div className="eventselect">
                    <ul>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Web Battle</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Beat-The-Bug</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>DB Knight</li>
                    </ul>
                    <ul style={{marginLeft:'auto',marginRight:'0px'}}>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>C - Experts</li>    
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Tech-Play</li>
                        </ul>
                </div>
                <br />
                <button type="submit" style={{marginBottom:'50px'}}>
                   {<PidDisplay/>}
                </button>
                </form>
            </div>
        </div>
    )
}

export default Register
