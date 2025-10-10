import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/educator/Footer'
import NavBar from '../../components/educator/NavBar'

const Educator = () => {
  return (
    <div>
      <div>
        {<Outlet/>}
        <NavBar/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Educator
