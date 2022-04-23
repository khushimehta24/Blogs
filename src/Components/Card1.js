import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Card1({ img, color, name }) {
    return <>
        <Grid container>
            <Grid item>
                <Card style={{ backgroundColor: 'white', padding: '15px', borderRadius: '7px' }}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt="img"
                    />
                    <h3 style={{ margin: '0', padding: '0', marginTop: '15px' }}>{name}</h3>
                </Card>
            </Grid>
        </Grid>
    </>
}

export default Card1