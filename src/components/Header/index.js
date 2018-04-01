import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className='headerOne'>
      <h1 style={{ marginLeft: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          R O M A N I
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
