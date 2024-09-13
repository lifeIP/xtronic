import { Box, Card, CardContent, Grid, Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HelloPage from './HelloPage'

import back_1 from './img/1.png'
import back_2 from './img/2.png'
import back_3 from './img/3.png'
import back_4 from './img/4.png'

import perehodnic from './img/perehodnic.png'
import perehodnic_2 from './img/perehodnic_2.png'

import './PageWorker.css'

export default function PageWorker({ pagePosition, pageIndexes }: { pagePosition: { x: number, y: number }, pageIndexes: number[][] }) {
    const [page, setPage] = useState<number | undefined>(1);

    useEffect(() => {
        let index = pageIndexes.at(pagePosition.y)?.at(pagePosition.x);
        setPage(index)
    }, [pagePosition, pageIndexes])

    if (page == 1) {
        const myStyle = {
            backgroundImage: `url(${back_1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <Box>
                <Card style={myStyle} sx={{ borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '75vh' }}>
                        <Grid item xs={1}>
                            <Typography textAlign="center" variant='h2' color='#FFFFFF'>
                                Переходники для быстрой зарядки электрмобилей
                            </Typography>

                        </Grid>
                    </Grid>
                </Card>
            </Box >
        )
    }



    if (page == 2) {
        return (
            <Box>
                <Card sx={{ opacity: .85, backgroundColor: "#1E252E", borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <CardContent>
                        <Typography textAlign="center" variant='h4' color='#FFFFFF'>
                            Переходник для быстрой зарядки CCS-GB/T
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "inline-flex" }}>
                        <Box className='perehodnic_1' sx={{ width: "500px", height: "400px" }} />
                        <Box sx={{ width: "35vw", marginTop: "15vh" }}>
                            <Typography variant='h4' color='#FFFFFF'>
                                Мощность: от 150 кВт-200кВт
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Максимальный ток: до 250 А
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Кол-во фаз: 3 (три)
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Рабочая температура: -30 до +50
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Ном. напряжение: до 1000В

                            </Typography>
                        </Box>
                    </Box>

                </Card>
            </Box>
        )
    }



    if (page == 3) {
        return (
            <Box>
                <Card sx={{ opacity: .85, backgroundColor: "#1E252E", borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <CardContent>
                        <Typography textAlign="center" variant='h4' color='#FFFFFF'>
                            Переходник для быстрой зарядки CHAdeMO - GB/T
                        </Typography>

                    </CardContent>
                    <Box sx={{ display: "inline-flex" }}>
                        <Box className='perehodnic_2' sx={{ width: "500px", height: "400px" }} />
                        <Box sx={{ width: "35vw", marginTop: "15vh" }}>
                            <Typography variant='h4' color='#FFFFFF'>
                                Мощность:  до 60 кВт
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Максимальный ток: до 120 А
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Кол-во фаз: 3 (три)
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Рабочая температура: -30 до +50
                            </Typography>
                        </Box>
                    </Box>

                </Card>
            </Box>
        )
    }


    if (page == 4) {
        return (
            <Box>
                <Card sx={{ opacity: .85, backgroundColor: "#1E252E", borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <CardContent>
                        <Typography textAlign="center" variant='h4' color='#FFFFFF'>
                            Переходник для быстрой зарядки CHAdeMO - GB/T для VW ID
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "inline-flex" }}>
                        <Box className='perehodnic_3' sx={{ width: "500px", height: "400px" }} />
                        <Box sx={{ width: "35vw", marginTop: "15vh" }}>
                            <Typography variant='h4' color='#FFFFFF'>
                                Мощность:  до 60 кВт
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Максимальный ток: до 120 А
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Кол-во фаз: 3 (три)
                            </Typography>
                            <Typography variant='h4' color='#FFFFFF'>
                                Рабочая температура: -30 до +50
                            </Typography>
                        </Box>
                    </Box>

                </Card>
            </Box>
        )
    }



    if (page == 5) {
        const myStyle = {
            backgroundImage: `url(${back_2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <Box>
                <Card style={myStyle} sx={{ borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '75vh' }}>
                        <Grid item xs={1}>
                            <Typography textAlign="center" variant='h2' color='#FFFFFF'>
                                Зарядные станции для зарядки электромобилей
                            </Typography>

                        </Grid>
                    </Grid>
                </Card>
            </Box >
        )
    }


    if (page == 6) {
        const myStyle = {
            backgroundImage: `url(${back_3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <Box>
                <Card style={myStyle} sx={{ borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '75vh' }}>
                        <Grid item xs={1}>
                            <Typography textAlign="center" variant='h2' color='#FFFFFF'>
                            Мы изготавливаем зарядные станции в соответствии с техническим заданием и требованиями каждого клиента
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Box >
        )
    }



    if (page == 7) {
        const myStyle = {
            backgroundImage: `url(${back_4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <Box>
                <Card style={myStyle} sx={{ borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '75vh' }}>
                        <Grid item xs={1}>
                            <Typography textAlign="center" variant='h2' color='#FFFFFF'>
                                Программное обеспечение для переходника CCS - GB/T
                            </Typography>

                        </Grid>
                    </Grid>
                </Card>
            </Box >
        )
    }
    return (
        <Box>
            <Card sx={{ opacity: .85, backgroundColor: "#1E252E", borderRadius: "36.5px", width: "70vw", height: "65vh" }}>

                <Typography variant='h2'>
                    {/* Enother */}
                </Typography>

            </Card>
        </Box>
    )
}
