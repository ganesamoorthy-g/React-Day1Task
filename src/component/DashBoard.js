import React from 'react'

function AddUser() {
  return (
    <div className='container-fluid'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
            users.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.mentor}</td>
                    <td>
                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>{
                            let newArray = [...users]
                            newArray.splice(i,1)
                            setUsers(newArray)
                        }}>Delete</Button>
                    </td>
                </tr>
            })
         }
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default AddUser