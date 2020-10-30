import { Action, ActionTypes, ToDo } from '../actions';

export const todosReducer = (state: ToDo[] = [], action: Action): ToDo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload.slice(0, 10);
    case ActionTypes.deleteTodo: // implicit type guard
      return state.filter((todo: ToDo) => todo.id !== action.payload);
    default:
      return state;
  }
};