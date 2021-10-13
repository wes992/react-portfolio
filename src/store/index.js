import { createStore, combineReducers } from 'redux';
import projects from './reducers/projectReducers';

export function initStore() {
  const reducers = combineReducers({
    projects,
  });

  const store = createStore(reducers);
  return store;
}
