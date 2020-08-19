import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-white">
          <h1>Sounds Like Work</h1>
        </Link>
      </div>
      <div className="navbar-menu">
      <div className="navbar-end">
      <Link className="navbar-item has-text-white" to="/about">
          About
        </Link>
        <Link className="navbar-item has-text-white" to="/products">
          Products
        </Link>
        <Link className="navbar-item has-text-white" to="/tags">
          Tags
        </Link>
      </div>

      </div>
    </div>
  </nav>
)

export default Navbar
