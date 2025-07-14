import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <h1 className="logo">logo</h1>
      <div className="links">
        <Link to='/'>home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Settings</Link>
      </div>
    </div>
  )
}

export default Main