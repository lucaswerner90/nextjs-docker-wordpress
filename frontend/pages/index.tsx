import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import { Grid, Button } from '@material-ui/core';
import fetch from 'isomorphic-unfetch';


import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API } = publicRuntimeConfig;

const simplePostRender = (post) => {
  const { id = '', title = { rendered: '' }, date = new Date(), slug = '' } = post;
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Link prefetch href={`post/${slug}`}>
        <Typography variant="button" style={{ cursor: 'pointer' }} gutterBottom>
          {title.rendered}
        </Typography>
      </Link>
      <Typography variant="body2" gutterBottom>
        {new Date(date).toLocaleString()}
      </Typography>
    </Grid>
  );
}

const renderPosts = (posts = []) => {
  return posts.map(post => simplePostRender(post));
}

export const Index = ({ basicInfo = { name: '', description: '' }, posts = [] }) => {
  const { name = '', description = '' } = basicInfo;
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Link prefetch href="/register">
            <Button color="secondary" style={{ cursor: 'pointer' }}>
              Create new post
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
        </Grid>

        {posts.length > 0 &&
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Posts
            </Typography>
            </Grid>
            {renderPosts(posts)}
          </Grid>
        }

      </Grid>
    </Layout>
  );
}


Index.getInitialProps = async () => {
  const postResponse = await fetch(API);
  const posts = await postResponse.json();


  const siteInfoResponse = await fetch(`${API}/settings`);
  const siteInfo = await siteInfoResponse.json();
  console.log(siteInfo);
  // 
  // Example of how to get the data from the API in getInitialProps()
  // 
  // This should go at the beginning of the file:
  // 
  // import fetch from 'isomorphic-unfetch';
  // import getConfig from 'next/config';
  // const { publicRuntimeConfig } = getConfig();
  // const { HOST_URL } = publicRuntimeConfig;
  // 
  // 
  // 
  // This should go here:
  // 
  // const res = await fetch(`${HOST_URL}/api/artist/genre/6`);
  // const data = await res.json();
  // console.log('Filter by genre -->', data);

  return { ...posts };
}

export default Index;
