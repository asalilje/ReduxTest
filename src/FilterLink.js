import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Styles from './styles/main.less';

const FilterLink = ({filter, children}) => (
  <Link to={filter === 'all' ? '/' : filter}
        className={Styles.todoFilter}
        activeClassName={Styles.todoFilterActive}>
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FilterLink;