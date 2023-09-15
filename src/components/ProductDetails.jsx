import React, { useEffect, useState } from "react";
import { ProductDetail } from "../api";
import { useParams } from "react-router-dom";
import { Stack, Box, ImageList, ImageListItem, Typography, Button } from "@mui/material";

const ProductDetails = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const [thumbnailChange, setThumbnailChange] = useState('')

    const { id } = useParams()

    useEffect(() => {
        productDetailApi()
    }, [])

    const productDetailApi = async () => {
        const productData = await ProductDetail(id)
        console.log(productData)
        setDetailProduct(productData)
    }

    let { title, category, description, discountPercentage, brand, images, price, rating, stock, thumbnail } = detailProduct
    return <>
        <Box>
            <Stack key={id} spacing={3} direction="row" sx={{ justifyContent: 'center', my: 3 }}>
                <ImageList cols={1} gap={8} >
                    <Button>Left</Button>
                    {images && images.length > 0 && images?.map((productImg) => {
                        return <ImageListItem sx={{ width: 200, height: 300 }}>
                            <img
                                src={productImg}
                                alt={title}
                                loading="lazy"
                                onClick={() => { setThumbnailChange(productImg) }}
                            />
                        </ImageListItem>
                    })}
                    <Button>Right</Button>
                </ImageList>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={thumbnailChange == '' ? thumbnail : thumbnailChange}
                        alt={title}
                        loading="lazy"
                    />
                </Box>
            </Stack>
            <Box sx={{ maxWidth: 900, margin: 'auto' }}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Box>
                    <Typography variant="span">
                        Brand:
                    </Typography>
                    <Typography variant="span">
                        {brand}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="span">
                        Category:
                    </Typography>
                    <Typography variant="span">
                        {category}
                    </Typography>
                </Box>

                <Typography variant="p">
                    {description}
                </Typography>
            </Box>
        </Box>
    </>

}
export default ProductDetails