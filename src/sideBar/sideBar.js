import React from 'react'
import Link from 'gatsby-link'
import './sideBar.css'

const sideBar = () => (
  <sidebar>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/whatever">Go back to the homepage</Link>
    </div>
  </sidebar>
)

export default sideBar
