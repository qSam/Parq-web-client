import axios from 'axios';
import {browserHistory} from 'react-router';

export const FETCH_POSTS = 'fetch_posts';
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const NEW_POST = 'new_post';

const ROOT_URL  = 'http://localhost:3090';

export function fetchPosts(myId) {

  const token = localStorage.getItem('token');

  return function (dispatch) {
    const ID = myId
    axios.get(`${ROOT_URL}/getAllUserPosts/${ID}`,{
      headers: {
        'authorization': token
      }
    })
      .then (response => {
        console.log('Fetching post...')
        dispatch({
          type:FETCH_POSTS,
          payload: response.data
        });
      })
      .catch( () => {
        //Show error
        console.log('Error')
        dispatch()
      });
  }

}

export function signinUser({email,password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`,{email,password})
      .then( response => {
        //Dispatch Auth action to reducer
        var myEmail = {email};
        dispatch({
          type: AUTH_USER,
          payload: myEmail['email']
        })
        //Save JWT Token
        localStorage.setItem('token', response.data.token);
        //Redirect to home
        browserHistory.push('/home');

      })
      .catch( response => dispatch() )

  };
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
        var myEmail = {email}
        dispatch({
          type: AUTH_USER,
          payload: myEmail['email']
        })
        //Save JWT Token
        localStorage.setItem('token', response.data.token);
        //Redirect to home
        browserHistory.push('/home');

      })
      .catch( response => dispatch() )

  };
}

export function newPost({post}, myId){

  const token = localStorage.getItem('token');

  return function(dispatch) {
     const ID = myId
     axios.put(`${ROOT_URL}/addNewUserPost/${ID}`,{post},{
       headers: {
         'authorization': token
       }
     })
     .then (response => {
       //Dispatch response payload to reducer
       console.log('Add Post successful', {post});
       browserHistory.push('/home');
     })
     .catch (response => dispatch())
  };
}
