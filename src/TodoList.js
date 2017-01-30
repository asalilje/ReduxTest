import React, {PropTypes} from 'react';
import Styles from './styles/main.less';
import Todo from './Todo';

const TodoList = ({todoList, onClick}) => {
    return (
        <div>
            <ul className={Styles.todoList}>
                { todoList.map(item => 
                    <Todo key={item.id} {...item} onClick={onClick} />
                )}
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    onClick: PropTypes.func,
    todoList: PropTypes.array
};

export default TodoList;