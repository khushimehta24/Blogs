import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card2 from './Card2';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function SinglePost() {

    const location = useLocation();
    const id = location.state.id;
    const data = location.state.data;
    const search = data.filter((postClicked) => postClicked.id === id);
    const [comments, setComments] = useState([])

    useEffect(() => {

        let config = {
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setComments(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    console.log(comments);

    return (<>
        <Grid container columns={12} sx={{ width: '100%', marginTop: '3%' }}>
            <Grid item md={8.5} sx={{ backgroundColor: 'white', borderRadius: '7px', padding: '10px' }}>
                <h1 style={{ fontWeight: 'bolder', margin: '0', padding: '0', textTransform: 'capitalize' }}>{search[0].title}</h1>
                <p style={{ textAlign: 'justify' }}>{search[0].body}</p>
            </Grid>
            <Grid item md={0.5}></Grid>
            <Grid item md={3}>
                <Card2 user={search[0].userId} />
                <h4 style={{ margin: '0', padding: '0', marginTop: '10%' }}>Comments :</h4>
                <Grid container spacing={3} >
                    {
                        comments.map((comment) => {
                            return <Grid item key={comment.id}>
                                <List sx={{ width: '100%', borderRadius: '10px', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar>{comment.id}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={comment.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {comment.email}
                                                    </Typography>
                                                    {` — ${comment.body}`}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />

                                </List>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </>
    )
}

export default SinglePost