import 'babel-polyfill';
import React, {PropTypes} from 'react';
import Styles from './styles/main.less';
import FilteredTodoList from './FilteredTodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
  
const App = ({name}) =>  {

    return (
      <div>
        <div className={Styles.text}>
          Hello {name}!
        </div>
        <h2>Redux Todo List Example</h2>
        <TodoForm />
        <FilteredTodoList />
        <TodoFilter />
      </div>
    );
};

App.propTypes = {
  name: PropTypes.string,
  params: PropTypes.object
};

export default App;
