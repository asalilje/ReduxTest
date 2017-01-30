import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {getFilteredTodoList, getIsLoading, getErrorMessage} from './reducers/index';
import * as todoListActions from './actions/todoListActions';
import TodoList from './TodoList';
import FetchError from './FetchError';

class FilteredTodoList extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const {filter, fetchTodoList} = this.props;
    fetchTodoList(filter).then(() => console.log('done!'));
  }

  render() {
    const {toggleTodoItem, isLoading, todoList, errorMessage} = this.props;
    if (isLoading && !todoList.length) {
      return (<p>Loading...</p>);
    }

    if (errorMessage && !todoList.length) {
      return <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
    }
    return (<TodoList todoList={todoList} onClick={toggleTodoItem} />);
  }
}

FilteredTodoList.propTypes = {
  isLoading: PropTypes.bool,
  filter: PropTypes.string,
  fetchTodoList: PropTypes.func,
  requestTodoList: PropTypes.func,
  toggleTodoItem: PropTypes.func,
  todoList: PropTypes.array
};

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    filter,
    isLoading: getIsLoading(state, filter),
    todoList: getFilteredTodoList(state, filter),
    errorMessage: getErrorMessage(state, filter)
  };
};

export default withRouter(connect(
  mapStateToProps,
  todoListActions
)(FilteredTodoList));
