import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';

const TableUsers = (props) => {
  

    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNew,setIsShowModalAddNew] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  const handleClose = ()=>{
    setIsShowModalAddNew(false);
  }

  const handleUpdateTable = (user) =>{
    setListUsers([user, ...listUsers]);
  }

  const handleEdit =(user) =>{
    console.log(user)
  }

    useEffect(()=>{
        //call apis
        //dry
        getUsers(1);
    },[])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page); 
        console.log(">>> Check new res: ",res)
        if (res && res.data && res.data){
          setTotalUsers(res.total)
          setListUsers(res.data)
          setTotalPages(res.total_pages);
        }
    }
    const handlePageClick = (event) =>{
      getUsers(+event.selected+1)
    }

    return(<>
     <div className ="my-3 add-new">
              <span><b>List Users:</b></span>
              <button className='btn btn-success' onClick={() =>{setIsShowModalAddNew(true)}} >Add New Users</button>
            </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length > 0 && listUsers.map((item,index)=> {
          return(
          <tr key ={`users-${index}`}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>
              <button 
              className="btn btn-warning mx-3"
              onClick={()=> handleEdit(item)}
              >Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>)
        })}
        
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
    
      />
       <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
          handleUpdateTable = {handleUpdateTable}
          />
        <ModalEditUser
          show={isShowModalEdit}
        />
      
    </>)
}

export default TableUsers; 