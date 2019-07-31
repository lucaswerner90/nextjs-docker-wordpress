import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { withRouter } from 'next/router';
import Link from 'next/link';

export class Login extends Component<any, any> {

    state = {
        email: '',
        emailTouched: false,
        password: '',
        passwordTouched: false,
        submitEnabled: false,
    }
    handleFormChange = (e) => {
        const { name, value } = e.target;
        const form = document.getElementById('loginForm') as HTMLFormElement;
        const submitEnabled = form.checkValidity();
        this.setState({
            submitEnabled,
            [name]: value,
            [`${name}Touched`]: true,
        });
    }

    submitForm = async (e) => {
        e.preventDefault();
        try {

            const { email, password } = this.state;
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                return history.back();
            } else {
                const data = await res.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container component="main" alignContent="center" justify="center" className={classes.root}>
                    <Grid item xs={12} sm={8} md={5} component={Paper} square>
                        <a href="/auth/facebook">Login with Facebook</a>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form className={classes.form} id="loginForm">

                            <FormControl error={this.state.email.length === 0 && this.state.emailTouched} fullWidth>
                                <InputLabel htmlFor="email" required>Email</InputLabel>
                                <Input
                                    required
                                    fullWidth
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.email}
                                    onChange={this.handleFormChange}
                                    aria-describedby="login email"
                                />
                            </FormControl>
                            <FormControl error={this.state.passwordTouched && this.state.password.length < 8} fullWidth style={{ marginTop: '10px' }}>
                                <InputLabel htmlFor="password" required>Password</InputLabel>
                                <Input
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    autoFocus
                                    value={this.state.password}
                                    onChange={this.handleFormChange}
                                    aria-describedby="login password"
                                />
                                <FormHelperText id="component-error-text">Password must contain at least 8 characters</FormHelperText>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={!this.state.submitEnabled}
                                className={classes.submit}
                                onClick={this.submitForm}
                            >
                                Login
                                </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgotpassword">
                                        <Typography variant="body2">
                                            Forgot password?
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register">
                                        <Typography variant="body2">
                                            Don't have an account? Sign Up
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
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
}))(withRouter(Login));