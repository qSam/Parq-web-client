import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import PostsReducer from './reducer_posts';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  form: form,
  posts: PostsReducer,
  auth: AuthReducer
});

export default rootReducer;
