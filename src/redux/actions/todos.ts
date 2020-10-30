import Axios           from 'axios';
import { Dispatch }    from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ToDo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await Axios.get<ToDo[]>(url);

  dispatch<FetchTodosAction>({ type: ActionTypes.fetchTodos, payload: response.data });
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};