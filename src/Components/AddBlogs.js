import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import '../Assets/AddBlogs.css'

function AddBlogs(props) {
    const [blog, setBlog] = useState({ image: '', blogName: '', desc: '', content: '', name: '' })
    const { BlogsData, totalBlogs, setTotalBlogs, openPopup, setOpenPopup } = props;
    console.log(BlogsData)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBlog({ ...blog, [name]: value })
    }

    localStorage.setItem('Blogs', JSON.stringify(totalBlogs))
    const handleSubmit = () => {
        const newBlog = { ...blog, id: new Date().getTime().toString(), createdAt: new Date().toLocaleDateString() };
        setTotalBlogs([...totalBlogs, newBlog]);
        setBlog({ image: '', blogName: '', desc: '', content: '', name: '' })
        localStorage.setItem('Blogs', JSON.stringify(totalBlogs))
    }
    console.log(totalBlogs)

    return (
        <>
            <Grid container columnSpacing={5} >
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="name" label="Author Name" name="name" value={blog.name} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="blogName" label="Title of the blog" name="blogName" value={blog.blogName} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="desc" label="Discription" name="desc" value={blog.desc} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="image" label="Link of featured image" name="image" value={blog.image} onChange={handleChange} />
                </Grid>
                <Grid item md={12} sx={{ marginTop: '3%' }}>
                    <TextField
                        name="content"
                        id="content"
                        value={blog.content}
                        onChange={handleChange}
                        label="Content"
                        sx={{ width: '100%' }}
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button className='btn' onClick={handleSubmit} sx={{ width: '100%', color: 'white', backgroundColor: '#007AFF', marginTop: '2%', border: '2px solid #007AFF' }}>Submit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddBlogs