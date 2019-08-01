import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

export class Login extends Component<any, any> {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container component="main" alignContent="center" justify="center" className={classes.root}>
                    <Grid item xs={12} sm={8} md={5} component={Paper} square>
                        <Typography component="h1" variant="h5" style={{ marginBottom: '10px' }}>
                            Login
                        </Typography>
                        <Link href="/auth/facebook">
                            <Button type="button" fullWidth variant="contained" color="primary">
                                Login with Facebook
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(https://source.unsplash.com/collection/1716972)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    image: {
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
}))(Login);