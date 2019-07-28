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
                title: 'Random artist',
                status: 'draft',
                facebook: 'facebook.com',
                genero_musical: [9]
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
                    <Button variant="contained" onClick={this.createArtist}>
                        Create
                    </Button>
                </Container>
            </Layout>
        )
    }
}
export default withRouter(RegistrationForm);
