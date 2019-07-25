import getConfig from 'next/config';
import { GET_POSTS } from './types';

const { publicRuntimeConfig } = getConfig();
const { wp } = publicRuntimeConfig;

export const getPosts = () => async dispatch => {
    try {
        const posts = await wp.posts();
        const payload = { ...posts };

        // const artists = await wp.artists().param('generos_musicales', [6]);
        // console.log(artists);



        return dispatch({
            payload,
            type: GET_POSTS,
        });
    } catch (error) {
    }
}