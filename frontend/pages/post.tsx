import React from 'react';
import { withRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { wp } = publicRuntimeConfig;

type PostPropsType = {
    post: any;
    featuredImage?: string;
};

export const Post = (props) => {
    const post = props.post;
    console.log(post)
    return (
        <Layout>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    {post.title.rendered}
                </Typography>
            </Container>
        </Layout>
    );
}

Post.getInitialProps = async ({ req }) => {
    const postSlug = req.params.slug;
    const [post] = await wp.posts().slug(postSlug);
    const props: PostPropsType = { post };
    if (post.featured_media) {
        const { source_url } = await wp.media().id(post.featured_media);
        props.featuredImage = source_url
    };
    return props;

}


export default withRouter(Post);
