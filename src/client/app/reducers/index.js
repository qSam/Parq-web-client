import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  form: form,
  posts: PostsReducer
});

export default rootReducer;
