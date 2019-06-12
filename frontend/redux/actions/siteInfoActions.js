import fetch from 'isomorphic-unfetch';
import { UPDATE_SITE_INFO, UPDATE_SITE_LOGO, UPDATE_SITE_MENUS } from '../actions/types';

export const getSiteInfo = () => async dispatch => {
    try {
        const [postsResponse, infoResponse] = await Promise.all([
            fetch('http://localhost:8000/wp-json/wp/v2/posts'),
            fetch('http://localhost:8000/wp-json'),
        ]);
        const [posts, info] = await Promise.all([
            postsResponse.json(),
            infoResponse.json()
        ]);
        const payload = { ...info };
        dispatch({
            payload,
            type: UPDATE_SITE_INFO,
        });
    } catch (error) {
    }
}
export const getSiteLogo = () => async dispatch => {
    try {
        const [mediaResponse] = await Promise.all([
            fetch('http://localhost:8000/wp-json/wp/v2/media')
        ]);
        const [media] = await Promise.all([
            mediaResponse.json()
        ]);
        const { source_url: logo = '' } = media.find(image => image.title.rendered === 'logo');
        const payload = { logo };
        dispatch({
            payload,
            type: UPDATE_SITE_LOGO,
        });
    } catch (error) {
    }
}
export const getSiteMenus = () => async dispatch => {
    try {
        const [headerMenuResponse] = await Promise.all([
            fetch('http://localhost:8000/wp-json/menus/v1/menus/header')
        ]);
        const [headerMenu] = await Promise.all([
            headerMenuResponse.json()
        ]);
        const items = headerMenu.items.map(item => ({ url: item.url, title: item.title }));
        const payload = {
            header: items
        };
        dispatch({
            payload,
            type: UPDATE_SITE_MENUS,
        });
    } catch (error) {
    }
}
export const getPosts = () => async dispatch => {
    try {
        const [postsResponse] = await Promise.all([
            fetch('http://localhost:8000/wp-json/wp/v2/posts')
        ]);
        const [posts] = await Promise.all([
            postsResponse.json()
        ]);
        const payload = { ...posts };
        dispatch({
            payload,
            type: UPDATE_SITE_INFO,
        });
    } catch (error) {
    }
}