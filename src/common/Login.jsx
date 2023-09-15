import React, { useState } from 'react'
import { FormControl, TextField, Button, Container,Box ,Dialog,DialogTitle} from '@mui/material'
import { LoginApi } from '../api'
import { useNavigate } from 'react-router-dom'

const loginValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [loginFields, setLoginFields] = useState(loginValues)
    const [loginFailModal, setloginFailModal] = useState(false)
    const [modalClose, setmodalClose] = useState(true)


    const navigate = useNavigate();

    const fieldHandler = (e) => {
        setLoginFields({ ...loginFields, [e.target.name]: e.target.value })
    }

    const loginHandler = async () => {
        if(loginFields.username !== '' && loginFields.password !== ''){
            const loginCredentials = await LoginApi(loginFields)
            console.log(loginCredentials)
            if(loginCredentials.token !== undefined){
                localStorage.setItem('token', loginCredentials.token)
                navigate('/todo')
                setLoginFields(loginValues)
            }else{
                setloginFailModal(true)
                setLoginFields(loginValues)
            }
        
        }
 
    }

    return <>
    <Box className='login-form' sx={{ height:'100%' ,display:'flex',alignItems:'center'}}> 
        <Container maxWidth="sm">
            <FormControl fullWidth sx={{ my: 2 }} variant="standard">
                <TextField
                sx={{borderColor:'red'}}
                    label="Username"
                    type='text'
                    name='username'
                    placeholder='kminchelle'
                    value={loginFields.username}
                    onChange={(e) => fieldHandler(e)}
                    focused
                />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
                <TextField
                    label="Password"
                    type='password'
                    name='password'
                    placeholder='0lelplR'

                    value={loginFields.password}
                    onChange={(e) => fieldHandler(e)}
                    focused
                />
            </FormControl>
            <Button className='loginBtn' sx={{ display:'flex',margin:'auto' ,width:200 , mt:3 , background:'black' ,fontWeight:800,paddingY:1}} variant="contained" onClick={() => loginHandler()}>Login</Button>
        </Container>
        <Dialog  
        open={loginFailModal}
        onClose={()=>{setloginFailModal(false)}}
        aria-labelledby="responsive-dialog-title">
 <DialogTitle id="responsive-dialog-title" >
          Please Fill valid Credentails 
        </DialogTitle>
        </Dialog>
        </Box>
    </>
}

export default Login