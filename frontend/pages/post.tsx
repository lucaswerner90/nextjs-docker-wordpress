import React from 'react';
import { withRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';
import fetch from 'isomorphic-unfetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API } = publicRuntimeConfig;

const getImage = async (id) => {
    const res = await fetch(`${API}/media/${id}`);
    const data = await res.json();
    return data;
}

export const Post = (props) => {
    const { post, featuredImage } = props;
    return (
        <Layout>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    {post.title.rendered}
                </Typography>
                <img src={featuredImage}/>
            </Container>
        </Layout>
    );
}

Post.getInitialProps = async ({ req }) => {
    const postSlug = req.params.slug;
    const res = await fetch(`${API}/post/${postSlug}`);
    const post = await res.json();
    let featuredImage = {};
    if (post.featured_media) {
        const { source_url } = await getImage(post.featured_media);
        featuredImage = source_url;
    };
    return { post, featuredImage };

}


export default withRouter(Post);
