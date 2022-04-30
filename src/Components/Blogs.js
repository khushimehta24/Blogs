import { Grid } from '@mui/material'
import { Card, CardContent, Paper, Chip, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../Assets/Blogs.css'
import Popup from './Popup'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import AddBlogs from './AddBlogs';
import { Link } from "react-router-dom";


function Blogs({ data }) {
    const [totalBlogs, setTotalBlogs] = useState(data)
    const [BlogsData, setBlogsData] = useState([])
    useEffect(() => {
        setBlogsData(JSON.parse(localStorage.getItem('Blogs')) ? JSON.parse(localStorage.getItem('Blogs')) : [])
        // localStorage.setItem('Blogs', totalBlogs)
    }, [BlogsData])

    const [openPopup, setOpenPopup] = useState(false);

    return (<>
        <div style={{ marginBottom: '3%' }}>

            <Grid container spacing={6}>
                {
                    BlogsData.map((blog, index) => {
                        let created = blog.createdAt.split('T')[0]
                        return <Grid item md={3} key={blog.id} >
                            <Grid container className='blogsContainer' >
                                <Grid item>
                                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Grid item sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '140px', alignItems: 'center' }}>
                                            <img src={blog.image} style={{ width: '100%', height: '100%', borderRadius: '2px', objectFit: 'cover' }} />
                                        </Grid>
                                        <Grid item>
                                            <h4 style={{ margin: '0px', padding: '0px' }}>{blog.blogName}</h4>
                                            <p style={{ margin: '0px', padding: '0px', fontSize: '10px', marginBottom: '10%' }}>{blog.desc}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Chip icon={<AccessTimeIcon />} label={created} sx={{ fontSize: '10px' }} />
                                    <Link to={"/myblogdetails"} state={{ BlogsData: BlogsData, id: blog.id, index: index }} className='link'>Read More</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    })
                }
            </Grid>
        </div>
        <Fab
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                BackgroundColor: 'blue'
            }}
            onClick={() => setOpenPopup(true)}
            aria-label="ADD"
        >
            <AddIcon />
        </Fab>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
            <AddBlogs BlogsData={BlogsData} totalBlogs={totalBlogs} openPopup={openPopup} setOpenPopup={setOpenPopup} setTotalBlogs={setTotalBlogs} />
        </Popup>
    </>
    )
}

export default Blogs