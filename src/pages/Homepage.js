import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Homepage() {
  const [users, setUsers] = useState([]);


  //pass the id
  const { id } = useParams()

  useEffect(
    () => {
      loadUsers();
    }, []
  );
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/users");
    setUsers(result.data);
  }
  // for deleting user
  // const deleteUser = async (id) => {
  //   await axios.delete('http://localhost:8090/user/${id}');
  //load the data
  //   loadUsers();
  // }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8090/user/${id}`);
    loadUsers();
  };



  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {/* whenever user created it will add here */}
            {
              users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-primary max-2">View</button>
                    <Link className="btn btn-outline-primary max-2" to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger max-2" onClick={() => deleteUser(user.id)}
                    >Delete</button>
                    {/* configureing in button  For that calling the delete user function onClick*/}
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>



    </div>
  )
}
