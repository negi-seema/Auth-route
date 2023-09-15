import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
const PrivateRouting = () => {
    // let [tokenCheck, setTokenCheck] = useState('')

    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     setTokenCheck(token)
    // }, [])

    return localStorage.getItem('token') ? <> <Navbar/><Outlet/> </>: <Navigate to='/'  replace />
}
export default PrivateRouting