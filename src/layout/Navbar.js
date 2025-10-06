import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NeuroFleetx

          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button> */}
      {/* <div className="ms-auto">
            <button className="btn btn-outline-light"> Add User</button>
          </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NeuroFleetx

          </a>
          <div className="ms-auto">
            <Link className="btn btn-outline-light " to="/adduser"> Add User</Link>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>



    </div>
  )
}
