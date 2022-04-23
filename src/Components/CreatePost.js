import { TextField, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../Assets/AddBlogs.css'

function CreatePost() {
    const [post, setPost] = useState({ title: '', body: '', userId: '' })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({ ...post, [name]: value })
    }

    const handleSubmit = () => {
        let data = {
            title: `${post.title}`,
            body: `${post.body}`,
            userId: `${post.userId}`
        }


        let config = {
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'Content-Type': 'text/plain'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setPost({ title: '', body: '', userId: '' })
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //   setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Grid container columnSpacing={5} >
                <Grid item md={12} sm={12} xs={12}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="title" label="Title" name="title" value={post.title} onChange={handleChange} />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="userId" label="User Id" name="userId" value={post.userId} onChange={handleChange} />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <TextField
                        name="body"
                        id="outlined-multiline-static"
                        label="Content"
                        value={post.body}
                        onChange={handleChange}
                        sx={{ width: '100%', marginTop: '2%' }}
                        multiline
                        rows={14}
                    />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Button className='btn' onClick={handleSubmit} sx={{ width: '100%', color: 'white', backgroundColor: '#007AFF', marginTop: '2%', border: '2px solid #007AFF' }}>Submit</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Post Successfully added!
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </>
    )
}

export default CreatePost