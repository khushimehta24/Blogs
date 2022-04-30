import { Grid } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import Card1 from './Card1';


function SingleBlog() {
    const location = useLocation();
    const id = location.state.id;
    const BlogsData = location.state.BlogsData;
    const search = BlogsData.filter((blogClicked) => blogClicked.id === id);
    return (
        <>
            <Grid>
                <img src={search[0].image} style={{ width: '100%', borderRadius: '3.5px', height: '200px', objectFit: "cover" }} />
            </Grid>
            <Grid container columns={12} sx={{ width: '100%', marginTop: '3%' }}>
                <Grid item md={8.5}>
                    <h1 style={{ fontWeight: 'bolder', margin: '0', padding: '0' }}>{search[0].blogName}</h1>
                    <p style={{ margin: '0', padding: '0', fontSize: '13px' }}>{search[0].desc}</p>
                    <p style={{ textAlign: 'justify' }}>{search[0].content}</p>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item md={3}>
                    <Card1 img={search[0].image} name={search[0].name} />
                </Grid>
            </Grid>
        </>
    )
}

export default SingleBlog