import fetch from 'isomorphic-unfetch';
import { UPDATE_SITE_INFO, UPDATE_SITE_LOGO, UPDATE_SITE_MENUS } from './types';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API } = publicRuntimeConfig;

import { API_GET_SITE_INFO, API_GET_MEDIA, API_GET_MENUS } from '../../config/urls';

export const getSiteInfo = () => async dispatch => {
    try {
        const [infoResponse] = await Promise.all([
            fetch(`${API}/${API_GET_SITE_INFO}`),
        ]);
        const [info] = await Promise.all([
            infoResponse.json()
        ]);
        const payload = { ...info };
        return dispatch({
            payload,
            type: UPDATE_SITE_INFO,
        });
    } catch (error) {
    }
}
export const getSiteLogo = () => async dispatch => {
    try {
        const [mediaResponse] = await Promise.all([
            fetch(`${API}/${API_GET_MEDIA}`)
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
            fetch(`${API}/${API_GET_MENUS}`)
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