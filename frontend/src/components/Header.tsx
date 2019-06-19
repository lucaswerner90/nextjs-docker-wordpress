import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Avatar, Grid } from '@material-ui/core';
import Link from 'next/link';

import { getSiteLogo, getSiteMenus } from '../redux/actions/siteInfoActions';

export class Header extends Component<any> {

    showMenuItems = (items = []) => {
        return items.map(({ url = '', title = '' }) => {
            return (
                <Typography variant="body1" align="left" key={url}>
                    <Link href={url}>
                        <a>
                            {title}Y
                        </a>
                    </Link>
                </Typography>
            );
        });
    }
    render() {
        const menuItems = this.props.menu || [];
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={2}>
                    <Avatar alt="Remy Sharp" src={this.props.logo} />
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                    {menuItems.length > 0 && this.showMenuItems(menuItems)}
                </Grid>
            </Grid>
        );
    }
}

const mapReduxStateToComponentProps = (state) => ({
    logo: state.siteInfo.logo,
    menu: state.siteInfo.menus.header
});

export default connect(mapReduxStateToComponentProps, { getSiteLogo, getSiteMenus })(Header)
