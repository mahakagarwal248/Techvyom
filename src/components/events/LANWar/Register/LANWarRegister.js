import React,{useState} from 'react'
import Navbar from '../../../navbar/Navbar';
import './LANWarRegister.css'
import { Avatar } from "antd";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    py:5,
  };

function LANWarRegister() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('')
    const [rollno, setRollno] = useState('')
    const [email, setEmail] = useState('')
    const [mobileno, setMobileno] = useState('')
    function onclick(e){
        return(
            name === "" ? "": 
            rollno === "" ? "" : 
            email === "" ? "" :
            mobileno === "" ? "" : handleOpen()
        )
    }
    function onsubmit(e){
        e.preventDefault();
        return false
    }
    return (
        <div className="lanwareventregister">
            <Navbar/>
            <div className="regform">
                <form className="form" onSubmit={onsubmit}>
                <Avatar className="avtr" src="https://joeschmoe.io/api/v1/random" />
                <h3>Welcome</h3>
                <input type="text" placeholder="Enter Name" value={name} onInput={e => setName(e.target.value)} id="name" required="required"/>
                <input type="number" name="rollnumber" placeholder="Enter Roll Number" value={rollno} onInput={e => setRollno(e.target.value)} required={true}/>
                <input type="email" placeholder="Enter Email" value={email} onInput={e => setEmail(e.target.value)} required={true}/>
                <input type="telnet" placeholder="Enter Mobile Number" value={mobileno} onInput={e => setMobileno(e.target.value)} required={true}/>
                <label>Select Event:-</label>
                <div className="eventselect">
                    <ul>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}} />Battleground (BGMI)</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>FIFA</li>
                        <li><input type="checkbox" style={{height:'16px',width:'16px',marginRight:'8px'}}/>Mini Militia</li>   
                    </ul>
                </div>
                <br />
                <button type="submit" style={{marginBottom:'50px'}} onClick={onclick}>Register</button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div style={{textAlign:'center'}}>
                    <h4 id="modal-modal-title" style={{color:'green'}}>
                        You've Successfully registered!
                    </h4>
                    <br/>
                    <h3>Your PID is:</h3>
                    <h1>220145</h1>
                    <Link to="/">
                    <button onClick={handleClose} className="homebtn">Back to home</button>
                    </Link>
                </div>
                </Box>
            </Modal>
                </form>
            </div>
        </div>
    )
}

export default LANWarRegister
