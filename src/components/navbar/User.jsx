import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <h1 className="logo">logo</h1>
      <div className="links">
        <Link to='/'>home</Link>
        <Link to='/'>Settings</Link>
      </div>
    </div>
  )
}

export default User