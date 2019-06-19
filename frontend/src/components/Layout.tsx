import { Component } from 'react';

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


export class Layout extends Component<any, any> {
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
export default withStyles(styles)(Layout);