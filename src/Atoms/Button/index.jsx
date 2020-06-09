/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, type, onClick, content, icon, id } = props;
  return (
    <button className={className} type={type} onClick={onClick} id={id}>
      <i className={icon} /> {content}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  content: PropTypes.string.isRequired,
  id: PropTypes.string,
};
Button.defaultProps = {
  onClick: () => {},
  className: '',
  id: '',
};
export default Button;
