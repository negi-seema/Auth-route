import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import todoImg from '../assets/img/todo1.jpg'
import seachImg from '../assets/img/search1.jpg'
import { Link } from "react-router-dom";

const Cards = () => {
    return <>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ justifyContent: 'center', marginX: 'auto', marginY: 5, maxWidth: 800 }}>
            <Card>
                <Link to='/todo'>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={todoImg}
                    />
                    <CardContent>
                        <Typography>
                            Todo List
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
            <Card>
            <Link to='/products'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={seachImg}
                />
                <CardContent>
                    <Typography>
                        Search Functionality
                    </Typography>
                </CardContent>
                </Link>
            </Card>
            <Card>
            <Link to='/carousel'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={seachImg}
                />
                <CardContent>
                    <Typography>
                       Carousel
                    </Typography>
                </CardContent>
                </Link>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={todoImg}
                />
                <CardContent>
                    <Typography>
                        Todo List
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    </>
}
export default Cards