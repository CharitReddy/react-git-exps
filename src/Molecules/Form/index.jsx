import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    className,
    onSubmit,
    name,
    autocomplete,
    formHeader,
    formBody,
    formFooter,
  } = props;

  return (
    <>
      <form
        className={className}
        onSubmit={onSubmit}
        name={name}
        autoComplete={autocomplete}>
        {formHeader}
        {formBody}
        {formFooter}
      </form>
    </>
  );
};
Form.propTypes = {
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  autocomplete: PropTypes.string.isRequired,
  formObject: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func,
};
Form.defaultProps = {
  onChange: () => {},
  name: '',
};
export default Form;
