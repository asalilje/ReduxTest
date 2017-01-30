import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as todoListActions from './actions/todoListActions';

class TodoForm extends React.Component {

    constructor(props, context) {
        super(props, context);
    }
    
    onClick() {
        this.props.dispatch(
            todoListActions.addTodoItem(this.refs.input.value)
        );
        this.refs.input.value = "";
        this.refs.input.focus();
    }

    render() {
        return (
            <div>
                <form onSubmit={e => {e.preventDefault(); this.onClick();}}>
                    <input type="text" placeholder="Add item" ref="input" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

TodoForm.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(TodoForm);