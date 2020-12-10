
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import feedReducer from './store/reducers';
import galleryReducer from './store/reducers';

export default function App() {

const rootReducers = combineReducers({
  feed: feedReducer,
  gallery: galleryReducer
});

const store = createStore(rootReducers);

  return(
    <Provider store = {store}>
         <AppNavigator/>
    </Provider>
  )
}