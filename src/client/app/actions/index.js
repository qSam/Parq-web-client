import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL  = 'http://localhost:3090';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/getAllUsers`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
