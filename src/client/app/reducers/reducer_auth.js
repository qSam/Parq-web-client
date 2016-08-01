import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/index';

const INITIAL_STATE = { email: ''};

export default function(state=INITIAL_STATE , action) {

  switch(action.type){
    case AUTH_USER:
      return {...state, authenticated: true, email:action.payload};
    case UNAUTH_USER:
      return {...state, authenticated: false, email:''};
    case AUTH_ERROR:
      return {...state, error:action.payload};
  }

  return state;
}
