import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL  = '';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URK}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
