import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouting =()=>{
    // let [tokenCheck ,setTokenCheck] = useState('')
    // useEffect(()=>{
    // let token = 
    // setTokenCheck(token)
    // },[])
return localStorage.getItem('token') ? <Navigate to='/card' replace /> : <Outlet/>

}

export default PublicRouting