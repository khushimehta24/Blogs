import { Dialog, DialogContent } from '@mui/material'
import React from 'react'
import { Grid, Button } from '@mui/material'
import { DialogTitle } from '@material-ui/core';

function Popup(props) {
    const { children, openPopup, setOpenPopup } = props;
    return (
        <>
            <Dialog open={openPopup}>
                <DialogTitle>
                    <Grid container sx={{ display: 'flec', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Grid item>
                            <h2 style={{ textTransform: 'uppercase', fontFamily: 'Alumni Sans, sans-serif', color: '#1976d2', margin: '0' }}>Create a Blog</h2>
                            <p style={{ color: 'black', fontFamily: 'Poppins', fontSize: '10px', margin: '0' }}>open up your heart or share your knowledge</p>
                        </Grid>
                        <Grid item onClick={() => setOpenPopup(false)} sx={{ cursor: 'pointer' }}>
                            x
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>

            </Dialog>
        </>
    )
}

export default Popup