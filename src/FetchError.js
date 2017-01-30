import React, {PropTypes} from 'react';

const FetchError = ({message, onRetry}) => (
  <div>
    <p>Could not fetch todo list. {message}</p>
    <button onClick={onRetry}>Try again</button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
};

export default FetchError;
