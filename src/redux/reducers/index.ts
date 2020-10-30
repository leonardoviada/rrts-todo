import { combineReducers } from 'redux';
import { todosReducer }    from './todos';
import { ToDo }            from '../actions';

export interface StoreState {
  todos: ToDo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});