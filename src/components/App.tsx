import React                            from 'react';
import { connect }                      from 'react-redux';
import { StoreState }                   from '../redux/reducers';
import { deleteTodo, fetchTodos, ToDo } from '../redux/actions';

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {

  render() {
    return (
      <div>
        <small>Leonardo Viada 2020, DevOps Testing Client</small>
        <h1>ToDos!</h1>
        <p>Click on a todo to delete it. Fake API running, edits are not effective.</p>
        <button onClick={ this.handleFetch }>Fetch ToDos</button>
        { this.renderToDoList() }
      </div>
    );
  }

  private renderToDoList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => <div onClick={ () => this.handleDelete(todo.id) }
                                                     key={ todo.id }>{ todo.title }</div>);
  }

  private handleFetch = (): void => {
    this.props.fetchTodos();
  };

  private handleDelete(id: number) {
    this.props.deleteTodo(id);
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDo[] } => ({ todos });

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);