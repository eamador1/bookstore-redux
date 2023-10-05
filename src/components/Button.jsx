import React from 'react';
import '../styles/button.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function Button({ itemId }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="remove"
      onClick={() => dispatch(removeBook({ itemId }))}
    >
      Remove
    </button>
  );
}
Button.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Button;
