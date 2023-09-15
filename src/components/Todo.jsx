import React, { useEffect, useState } from 'react'
import { Button, Container, TextField, FormControl, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'



const loginValues = {
    username: '',
    email: ''
}

const Todo = () => {
    const [userData, setUserData] = useState(loginValues)
    const [array, setArray] = useState([])
    const [indexStore, setIndexStore] = useState(null)
    const [updateArrayData, setupdateArrayData] = useState([])


 

    useEffect(() => {
        const getList = JSON.parse(localStorage.getItem('userdata'))
        if (getList == null || getList?.length == 0) {
            console.log('--==')
        } else {
            setArray(getList)
        }
    }, [])

    const fieldHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        localStorage.setItem('userdata', JSON.stringify(array))
    }, [array])


    const submitHandler = async () => {
        if (userData.username !== '' && userData.email !== '') {
            setArray((previous) => [...array, userData])
            setUserData(loginValues)
        }
    }

    const deletHandler = (dataIndex) => {
        let updateArray = array?.filter((item, index) => {
            return (dataIndex !== index)
        })
        localStorage.setItem('userdata', JSON.stringify(updateArray))
        setArray(updateArray)
    }

    useEffect(() => {
        if(updateArrayData.length > 0){
            setArray(updateArrayData)
            localStorage.setItem('userdata', JSON.stringify(updateArrayData))
            setUserData(loginValues)
        }
    }, [updateArrayData])


    const updateHandler = () => {
        let updatedarr = array
        updatedarr[indexStore].username = userData.username
        updatedarr[indexStore].email = userData.email
        setupdateArrayData(updatedarr)
    }
    
    const editHandler = (editItem, index) => {
        setIndexStore(index)
        setUserData({
            username: editItem.username,
            email: editItem.email
        })
    }

    return <>
      
        <Container maxWidth="sm">
            <FormControl fullWidth sx={{ my: 2 }} variant="standard">
                <TextField
                    label="Username"
                    type='text'
                    name='username'
                    value={userData.username}
                    onChange={(e) => fieldHandler(e)}
                    focused
                />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
                <TextField
                    label="email"
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={(e) => fieldHandler(e)}
                    focused
                />
            </FormControl>
            <Button variant="contained" onClick={() => submitHandler()}>Submit</Button>
            <Button variant="contained" onClick={() => updateHandler()}>Update</Button>

            <TableContainer sx={{ my: 2 }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UserName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {array?.map((item, index) => {
                            return <TableRow key={index}>
                                <TableCell>{item.username}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell onClick={() => editHandler(item, index)}>Edit</TableCell>
                                <TableCell onClick={() => { deletHandler(index) }}>Delete</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </>
}
export default Todo