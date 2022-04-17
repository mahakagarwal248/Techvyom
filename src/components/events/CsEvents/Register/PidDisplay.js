import React from 'react';
import './Register.css'
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
    p: 5,
  };

function PidDisplay() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <p onClick={handleOpen} style={{color:'white',margin:'0'}} >Register</p>
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
                    <h3>Your PID is:</h3>
                    <h1>220145</h1>
                    <Link to="/">
                    <button onClick={handleClose} className="homebtn">Back to home</button>
                    </Link>
                </div>
                </Box>
            </Modal>
        </div>
    )
}

export default PidDisplay
