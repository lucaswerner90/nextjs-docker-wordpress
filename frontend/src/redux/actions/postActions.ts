import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { API_POSTS_URL } from '../../config/urls';
import { GET_POSTS } from './types';


const { publicRuntimeConfig } = getConfig();
const { API } = publicRuntimeConfig;

export const getPosts = () => async dispatch => {
    try {
        const [postsResponse] = await Promise.all([
            fetch(`${API}/${API_POSTS_URL}`)
        ]);
        const [posts] = await Promise.all([
            postsResponse.json()
        ]);
        const payload = { ...posts };
        return dispatch({
            payload,
            type: GET_POSTS,
        });
    } catch (error) {
    }
}