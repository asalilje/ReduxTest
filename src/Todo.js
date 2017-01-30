import React, {PropTypes} from 'react';
import Styles from './styles/main.less';

const Todo = ({id, text, done, onClick}) => {
    return (
        <li className={done ? Styles.todoItem + ' ' + Styles.todoItemDone : Styles.todoItem} onClick={() => onClick(id)}>{text}</li>
    );
};

Todo.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    done: PropTypes.bool,
    onClick: PropTypes.func
};

export default Todo;