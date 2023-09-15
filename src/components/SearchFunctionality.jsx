import { Stack, Card, CardMedia, CardContent, Typography, TextField, FormControl, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import todoImg from '../assets/img/todo1.jpg'
import seachImg from '../assets/img/search1.jpg'
import { Link } from "react-router-dom";
import { AllProducts, SearchProducts } from "../api";

const SearchFunctionality = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = async () => {
        const data = await AllProducts()
        setProducts(data.products)
    }

    useEffect(() => {
        if (searchQuery) {
            searchApi()
        }
    }, [searchQuery])

    const searchApi = async () => {
        const data = await SearchProducts(searchQuery)
        setProducts(data.products)
    }

    const searchHandler = async (e) => {
        setSearchQuery(e.target.value)
    }

    return <>
        <Box className='search-wrapper'>
            <Box className='search-box' sx={{paddingY:4}}>
                <FormControl sx={{  maxWidth: 400, display: "flex", marginX: 'auto', }}>
                    <TextField
                        label="Seach Product"
                        type='text'
                        name='search'
                        value={searchQuery}
                        onChange={(e) => { searchHandler(e) }}
                        placeholder='search'
                        focused
                    />
                </FormControl>
            </Box>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap sx={{ justifyContent: 'center', marginX: 'auto', marginBottom: 5, }}>
                {products.length > 0 && products?.map((item) => {
                    let x = `/products/${item.id}`
                    return <Card key={item.id} className='product-card' sx={{ maxWidth: 300, borderRadius: 2 }}>
                        <Link to={x}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                width={250}
                                image={item.thumbnail}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                })}
            </Stack>

        </Box>
    </>
}

export default SearchFunctionality