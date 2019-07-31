import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundImage: `url(https://source.unsplash.com/collection/168902)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundColor: theme.palette.common.black
        },
    },
    mainContainer: {
        width: '100%',
        height: '100vh'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#ffffffbf',
        padding: '6%'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles({});

    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.mainContainer}>
            <Grid item xs={12} sm={8} md={4}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Send Password
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Send email
                        </Button>
                    </form>
                </Paper>

            </Grid>
        </Grid>
    );
}