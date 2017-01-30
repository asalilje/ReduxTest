import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';

const TodoFilter = ({store}) => {
    return (
        <div>
            <FilterLink
                filter="all"
                store={store}>Show all</FilterLink>
            {' '}
            <FilterLink
                filter="todo"
                store={store}>Show todo</FilterLink>
            {' '}
            <FilterLink
                filter="done"
                store={store}>Show done</FilterLink>
        </div>
    );
};

TodoFilter.propTypes = {
    store: PropTypes.object
};

export default TodoFilter;