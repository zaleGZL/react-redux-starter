import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

const Button = props => {
  const { children, type, ...otherProps } = props;

  return (
    <button
      className={classnames({ 'button_primary': type === 'primary' })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
