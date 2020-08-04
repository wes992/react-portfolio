import { createStore, combineReducers } from 'redux';
import projects from './reducers/projectReducers';

export function initStore() {
	const reducers = combineReducers({
	projects,
	data1: () => ['1','2','3','4'],
	data2: () => ['a','b','c']
	})

	const store = createStore(reducers);
	return store;
}