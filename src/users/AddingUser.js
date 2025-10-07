import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddingUser() {

  // States for all input fields
  // const [name, setName] = useState('');
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [role, setRole] = useState(''); // State for role dropdown

  // Handle form submission
  // const handleSubmit = (e) => {
  // e.preventDefault(); // Prevent page reload
  // const userData = {
  //   name,
  //   username,
  //   email,
  //   role
  // };
  // console.log('User Data:', userData);
  // Here you can send `userData` to your backend API
  //   alert('User Registered Successfully!');
  // };

  // navigating to home page
  let navigate = useNavigate()





  //store user information inside state
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    role: ""
  });
  //Destructure this
  const { name, username, email, role } = user;
  //putting name inside the name , keep on adding the new updates
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //after submit 
  const onSubmit = async (e) => {
    e.preventDefault();  //from preventing werid url
    await axios.post("http://localhost:8090/user", user)
    navigate("/")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 mx-auto border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />

              {/* only call at that time */}

            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                UserName
              </label>
              <input type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input type={"text"}
                className="form-control"
                placeholder="Enter your e-mail"
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
                onChange={(e) => onInputChange(e)}
              // use the same function as inputs
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
                <option value="Manager">Driver</option>
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
// import React, { useState } from 'react';

// export default function AddingUser() {
// Single state object for all inputs
// const [user, setUser] = useState({
//   name: '',
//   username: '',
//   email: '',
//   role: ''
// });

// Destructure for easier access
// const { name, username, email, role } = user;

// Handle input changes
// const onInputChange = (e) => {
//   setUser({ ...user, [e.target.name]: e.target.value });
// };

// Handle form submission
// const handleSubmit = (e) => {
//   e.preentDefault(); // Prevent page reload
//   console.log('User Data:', user);
//   alert('User Registered Successfully!');v
// send `user` to your backend here
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 col-md-6 offset-md-3 mx-auto border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Register User</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={name}
//                 onChange={onInputChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your username"
//                 name="username"
//                 value={username}
//                 onChange={onInputChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">E-mail</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your e-mail"
//                 name="email"
//                 value={email}
//                 onChange={onInputChange}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="role" className="form-label">Role</label>
//               <select
//                 className="form-select"
//                 name="role"
//                 value={role}
//                 onChange={onInputChange}
//               >
//                 <option value="">Select Role</option>
//                 <option value="Admin">Admin</option>
//                 <option value="User">User</option>
//                 <option value="Manager">Manager</option>
//               </select>
//             </div>

//             <button type="submit" className="btn btn-outline-primary">Submit</button>
//             <button type="button" className="btn btn-outline-danger mx-2">Cancel</button>
//           </form>

//           <div className="mt-3">
//             <a href="#">Don't have an account?</a>
//           </div>
//           {/* <div className="mt-4">
//             <h4>Registered Users:</h4>
//             {usersList.length === 0 ? (
//               <p>No users registered yet.</p>
//             ) : (
//               <ul className="list-group">
//                 {usersList.map((u, index) => (
//                   <li key={index} className="list-group-item">
//                     {u.name} ({u.username}) - {u.email} - {u.role}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
