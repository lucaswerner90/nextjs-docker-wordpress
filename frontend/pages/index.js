import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/Layout';
import { connect } from 'react-redux';
import { getSiteInfo, getPosts } from '../redux/actions/siteInfoActions';

export class Index extends Component {

  async componentDidMount() {
    if (!this.props.siteInfo.name) {
      this.props.getSiteInfo();
      this.props.getPosts();
    }
  }
  render() {
    const { siteInfo = '' } = this.props;
    const { name = '', description = '' } = siteInfo;
    return (
      <Layout id="indexLayoutComponent">
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            {`Welcome to ${name}`}
          </Typography>
          <Typography variant="body2" component="h1" gutterBottom>
            {description}
          </Typography>
        </Container>
      </Layout>
    )
  }
}

const mapReduxStateToComponentProps = (state) => ({
  siteInfo: state.siteInfo
});

export default connect(mapReduxStateToComponentProps, { getSiteInfo, getPosts })(Index);
