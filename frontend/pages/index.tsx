import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';
import { connect } from 'react-redux';
import { getSiteInfo, getSiteLogo, getSiteMenus } from '../src/redux/actions/siteInfoActions';




export const Index = ({ basicInfo = { name: '', description: '' } }) => {
  const { name = '', description = '' } = basicInfo;
  return (
    <Layout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          {`Welcome to ${name}`}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </Container>
    </Layout>
  );
}


Index.getInitialProps = async ({ store }) => {
  const [siteInfo] = await Promise.all([
    store.dispatch(getSiteInfo()),
    store.dispatch(getSiteLogo()),
    store.dispatch(getSiteMenus())
  ]);
  if (siteInfo && siteInfo.payload) {
    return { basicInfo: siteInfo };
  }
  return {};
}

const mapReduxStateToComponentProps = (state) => ({
  basicInfo: state.siteInfo
});

export default connect(mapReduxStateToComponentProps)(Index);