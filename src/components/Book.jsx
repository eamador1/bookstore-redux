import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';
import Button from './Button';

const Book = ({
  title, author, itemId,
}) => (
  <div>
    <h4>{ title }</h4>
    <span>{ author }</span>
    <Button itemId={itemId} />
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
