import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Homepage() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      loadUsers();
    }, []
  );
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/users");
    setUsers(result.data);
  }
  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                    <button className="btn btn-outline-primary max-2">Edit</button>
                    <button className="btn btn-danger max-2">Delete</button>
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
