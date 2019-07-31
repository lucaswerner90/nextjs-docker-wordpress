import React from 'react';
import { Grid, Button, makeStyles, Paper, Avatar, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(_theme => ({
    root: {
        width: '100%',
        height: '80px',
        marginTop: '0',
    },
    paper: {
        background: '#ffffff05',
        flexDirection: 'row',
        padding: '1%',
        justifyContent: 'flex-end'
    },
}));

export default function Header() {
    const classes = useStyles({});
    return (
        <Grid container justify="center" spacing={0}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>




                    <Grid container justify="flex-start" alignItems="center" spacing={2}>
                        <Grid item>
                            <Avatar src={'https://source.unsplash.com/Y9MoiZi9Rbg'} />
                        </Grid>
                        <Grid item>
                            <Link href="/">
                                <Typography variant="h5">
                                    Your Page Title
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>


                    <Grid container justify="flex-end" alignItems="center" spacing={2}>
                        <Grid item>
                            <Link href="/blog">
                                <Button color="secondary" variant="text">
                                    Blog
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/login">
                                <Button color="secondary" variant="text">
                                    Access
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>






                </Paper>
            </Grid>
        </Grid>
    );
}