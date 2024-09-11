import { Box, Card, CardContent, Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HelloPage from './HelloPage'
import back_1 from './img/1.png'

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
                <Card style={myStyle} sx={{borderRadius: "36.5px", width: "70vw", height: "70vh" }}>
                    <CardContent>
                        <Typography textAlign="center" variant='h2' color='#FFFFFF'>
                            Переходники для быстрой зарядки электрмобилей
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }
    if (page == 2) {
        return (
            <Box>
                <Card sx={{ opacity: .85, backgroundColor: "#1E252E", borderRadius: "36.5px", width: "70vw", height: "65vh" }}>
                    <Typography variant='h2'>
                        ewfcewirhfauwehdhowaodjoi
                    </Typography>
                </Card>
            </Box>
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
