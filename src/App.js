import './App.scss';
import TableUsers from './component/TableUsers';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './component/ModalAddNew';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [isShowModalAddNew,setIsShowModalAddNew] = useState(false);

  const handleClose = ()=>{
    setIsShowModalAddNew(false);
  }

  return (
    <>
<div className='app-container'>
          <Header/>
          <Container>
            <div className ="my-3 add-new">
              <span><b>List Users:</b></span>
              <button className='btn btn-success' onClick={() =>{setIsShowModalAddNew(true)}} >Add New Users</button>
            </div>
            <TableUsers/>
          </Container>
          <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
          />

  </div>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  </>
  );
}

export default App;
