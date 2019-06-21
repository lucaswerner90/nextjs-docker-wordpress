import React from 'react';
import { withRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';
import { connect } from 'react-redux';
import { getPosts } from '../src/redux/actions/postActions';




export const Post = (props) => {
    console.log(props.router.query.id);
    return (
        <Layout>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    {`Post page`}
                </Typography>
            </Container>
        </Layout>
    );
}

Post.getInitialProps = async ({ store }) => {
    const [posts] = await Promise.all([
        store.dispatch(getPosts()),
    ]);
    return { posts: Object.values(posts.payload) };
}

const mapReduxStateToComponentProps = (state) => ({
    posts: state.posts
});

export default withRouter(connect(mapReduxStateToComponentProps)(Post));
