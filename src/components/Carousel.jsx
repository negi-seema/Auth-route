import React from 'react'
import { Button, Box } from '@mui/material';


const CarouselBox = ({ boxno }) => {
    return <>
        <Box>Box {boxno}</Box>
    </>
}


const Carousel = () => {
    return <>
        <Box>
            <Button>Left</Button>
            <Button>Right</Button>
            <Box>
                <CarouselBox boxno={1} />
                <CarouselBox boxno={2} />
                <CarouselBox boxno={3} />
                <CarouselBox boxno={4} />
                <CarouselBox boxno={5} />
                <CarouselBox boxno={6} />
                <CarouselBox boxno={7} />
                <CarouselBox boxno={8} />
                <CarouselBox boxno={9} />
                <CarouselBox boxno={10} />
                <CarouselBox boxno={11} />
                <CarouselBox boxno={12} />
            </Box>
        </Box>
    </>
}

export default Carousel