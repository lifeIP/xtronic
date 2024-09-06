import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import HelloPage from './HelloPage'

export default function PageWorker() {
    return (
        <Box>
            <Card sx={{ width: "70vw", height: "75vh" }}>
            <HelloPage />
            <Typography variant='h2'>
                PageWorker
            </Typography>
            </Card>
        </Box>
    )
}
