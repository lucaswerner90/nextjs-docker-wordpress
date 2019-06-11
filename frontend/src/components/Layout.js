import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Footer from './Footer';

const styles = () => ({
    root: {
        width: "100%",
        maxWidth: '98%',
        margin: "0 auto",
    },
});


class Layout extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {this.props.children}
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Footer />
                </Grid>
            </Grid>
        );
    }
}
Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Layout);