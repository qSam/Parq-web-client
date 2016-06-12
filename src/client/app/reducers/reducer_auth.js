import {
  AUTH_USER
} from '../actions/index';

export default function(state={} , action) {
  switch(action.type){
    case AUTH_USER:
      return {...state, authenticated: true}
  }

  return state;
}
