import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';

  const ModalAddNew = (props) =>{
    const {show,handleClose,handleUpdateTable} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = async () => {
        let res = await PostCreateUser(name,job);
        console.log(">>>Check res:", res)
        if(res&&res.id){
            handleClose();
            setName('');
            setJob('');
            toast.success("A user is created succeed!");
            handleUpdateTable({first_name: name, id: res.id});
        }
        else {
            toast.error("An Error...")
        }
    }
    return ( 
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
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
              <Button variant="primary" onClick={()=> handleSaveUser()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
  }


export default ModalAddNew;