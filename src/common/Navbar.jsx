import React from 'react'
import { Button, Box, AppBar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/')
    }




    return <Box className='navbox' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 2 }}>
        <Box>
            <Link to='/card'  > <Typography sx={{color:'black' , fontWeight:500 , fontSize:18 }} >LOGO</Typography></Link>
        </Box>
        <Box gap={3} sx={{ display: 'flex' }}>
            <Link to='/todo' ><Typography  sx={{color:'black' , fontWeight:400 , fontSize:18 }}>TODO</Typography></Link>
            <Link to='/products'><Typography  sx={{color:'black' , fontWeight:400 , fontSize:18 }}>PRODUCTS</Typography></Link>
            <Link to='/carousel'><Typography  sx={{color:'black' , fontWeight:400 , fontSize:18 }}>Carousel</Typography></Link>
        </Box>
        <Box>
            <Button onClick={() => { logoutHandler() }}  sx={{color:'black' , fontWeight:500 , fontSize:18 }}>Logout </Button>
        </Box>
    </Box>
    
}

export default Navbar