import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/book.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(item.item_id));
  };
  return (
    <div>
      <h3>{item.title}</h3>
      <p>
        Author:
        {' '}
        {item.author}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
Book.propTypes = {
  item: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
