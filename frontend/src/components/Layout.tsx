import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        {this.props.children}
                    </Grid>
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}