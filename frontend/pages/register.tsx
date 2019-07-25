import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';

import { Button } from '@material-ui/core';



export class RegistrationForm extends Component<any, any> {

    createArtist = async () => {
        const res = await fetch('/api/artist', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'any title',
                content: 'some content here',
                status: 'publish'
            }),
        });
        const data = await res.json();
        console.log(data);
    }
    render() {
        return (
            <Layout>
                <Container maxWidth="sm">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create new post
                    </Typography>
                    <Button variant="contained" color="primary" onClick={this.createArtist}>
                        Create
                    </Button>
                </Container>
            </Layout>
        )
    }
}
export default withRouter(RegistrationForm);
