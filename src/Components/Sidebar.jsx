import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style={{width: 280}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item active">
      <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
      <NavLink className="nav-link" activeClassName="active" to="BookRecord">Book Record</NavLink>
      </li>
      <li>  
      <NavLink className="nav-link" activeClassName="active" to="Author">Author Record</NavLink>
      </li>
      <li>
      <NavLink className="nav-link" activeClassName="active" to="TableBook">Books</NavLink>     
      </li>
      <li> 
      <NavLink className="nav-link" activeClassName="active" to="TableAuthor">Authors</NavLink>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar