import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {




  // navigating to home page
  let navigate = useNavigate()
  //id getting from current route for this 

  const { id } = useParams()



  //store user information inside state
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    role: ""
  });
  //Destructure this
  const { name, username, email, role } = user
  //putting name inside the name , keep on adding the new updates
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();

  }, []);



  //after submit 
  const onSubmit = async (e) => {
    e.preventDefault();  //from preventing werid url
    await axios.put(`http://localhost:8090/user/${id}`, user)
    navigate("/")
  };
  //load data for specific user
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8090/user/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 mx-auto border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter your name'
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />

              {/* only call at that time */}

            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                UserName
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter your username'
                name="username"
                value={username}
              //  onChange={(e)=>onInputChange(e)}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                E-mail
              </label>
              <input type={"text"}
                className="form-control"
                placeholder='Enter your e-mail'
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="Role" className="form-label">Role</label>
              <select
                className="form-select"
                name="role"
                value={role}
              // use the same function as inputs
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
              </select>
            </div>



            <button type="submit" className="btn btn-outline-primary">Submit</button>

            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>

            <div><a href="#">Don't have account</a></div>
          </form>
        </div>

      </div>


    </div>
  )
}

