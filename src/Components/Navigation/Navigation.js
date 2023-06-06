import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export const Navigation = () => {
  const [active, setActive] = useState(1)

  console.log(active, setActive)
  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Outlet />
    </>
  )
}

export default Navigation
