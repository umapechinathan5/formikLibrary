import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style={{width: 280, position:'absolute'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     
      <span className="fs-4">Library</span>
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
   
  </div>
  )
}

export default Sidebar