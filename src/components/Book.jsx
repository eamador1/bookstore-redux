import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

function Book({ category, title, author }) {
  return (
    <div>
      <span>{ category }</span>
      <h4>{ title }</h4>
      <span>{ author }</span>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
