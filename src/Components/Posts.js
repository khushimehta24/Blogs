import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Chip, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
function Posts() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {

        let config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>
            <Grid container spacing={4}>
                {
                    data.map((blogpost) => {
                        const user = `user ${blogpost.userId}`
                        return <Grid item md={3} >
                            <Grid container sx={{ backgroundColor: 'white', height: '100%', padding: '5px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between' }}>
                                <Grid item>
                                    <h5 style={{ margin: '0', textTransform: 'capitalize' }}>{blogpost.title}</h5>
                                    <p style={{ fontSize: '10px' }}>{`${blogpost.body.slice(0, 50)}...`}</p>
                                </Grid>
                                <Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <Chip label={user} component="a" href="#basic-chip" clickable />
                                    <Link to={"/postdetails"} state={{ data: data, id: blogpost.id }} className='link' style={{ fontWeight: 'bold' }}>Read More</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    })
                }
            </Grid>
        </>
    )
}

export default Posts