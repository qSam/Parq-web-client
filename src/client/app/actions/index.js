import axios from 'axios';
import {browserHistory} from 'react-router';

export const FETCH_POSTS = 'FETCH_POSTS';
export const AUTH_USER = 'AUTH_USER';

const ROOT_URL  = 'http://localhost:3090';

export function fetchPosts() {

  const token = localStorage.getItem('token');

  return function (dispatch) {
    axios.get(`${ROOT_URL}/getAllUserPosts/parq-user3@gmail.com`,{
      headers: {
        'authorization': token
      }})
      .then (response => {

        dispatch({
          type:FETCH_POSTS,
          payload: response.data
        });
      });
  }

}

export function signinUser({email,password}) {
  return function(dispatch) {
    //Submit login info to Parq-API
    axios.post(`${ROOT_URL}/signin`,{email,password})
      .then( response => {
        // If request is good, update state
        dispatch({type:AUTH_USER})
        // Save JWT Token
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        //Redirect to home
        browserHistory.push('/home');

      });

  }

}
