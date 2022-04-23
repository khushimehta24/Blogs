import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Card2({ user }) {
    return (
        <>
            <Grid container>
                <Grid item sx={{ width: '100%' }}>
                    <Card style={{ backgroundColor: 'white', padding: '15px', borderRadius: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <h3 style={{ margin: '0', padding: '0', marginTop: '0' }}>{`user${user}`}</h3>
                            <p style={{ margin: '0', padding: '0', fontSize: 'small', color: 'grey' }}>Following</p>
                        </Box>
                        <Box sx={{ backgroundColor: '#37D699', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', padding: '5px 15px', color: 'white', borderRadius: '3.5px' }}>
                            ♥
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Card2