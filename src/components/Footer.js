import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <nav className="footer has-text-white">
    <div className="container level">
      <div className="footer-left level-left is-3">
        <Link to="/" className="navbar-item has-text-white">
          <h1>Sounds Like Work</h1>
        </Link>
      </div>
      <div className="footer-right level-right is-3">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  </nav>
)

export default Footer
