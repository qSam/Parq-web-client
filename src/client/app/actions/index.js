import axios from 'axios';
import {browserHistory} from 'react-router';

export const FETCH_POSTS = 'fetch_posts';
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';

const ROOT_URL  = 'http://localhost:3090';

export function fetchPosts() {

  const token = localStorage.getItem('token');

  return function (dispatch) {
    axios.get(`${ROOT_URL}/getAllUserPosts/parq-user3@gmail.com`,{
      headers: {
        'authorization': token
      }
    })
      .then (response => {

        dispatch({
          type:FETCH_POSTS,
          payload: response.data
        });
      })
      .catch( () => {
        //Show error
        console.log('I am here');
        dispatch(authError('Bad Login Info'))
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

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function signupUser({email,password}){
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`,{email,password})
      .then( response => {
        //Dispatch Auth action to reducer
        console.log('I am here')
        dispatch({type: AUTH_USER})
        console.log('Here now');
        //Save JWT Token
        localStorage.setItem('token', response.data.token);
        //Redirect to home
        browserHistory.push('/home');

      })
      .catch( response => dispatch() )

  };
}
