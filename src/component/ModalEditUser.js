import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';

  const ModalEditUser = (props) =>{
    const {show,handleClose} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

const handleEditUser =() =>{
    
}
    return ( 
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
  <div class="mb-3">
    <label className="form-labe">Name</label>
    <input 
    type="text" 
    class="form-control"
    value={name}
    onChange={(event) => setName(event.target.value)}
    />
  </div>
  <div class="mb-3">
    <label className="form-label">Job</label>
    <input 
    type="text" 
    class="form-control"
    value={job}
    onChange={(event) => setJob(event.target.value)}
    />
  </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=> handleEditUser()}>
                Comfirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
  }


export default ModalEditUser;