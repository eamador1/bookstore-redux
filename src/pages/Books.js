import React from 'react';
import BookList from '../components/BookList';
import Form from '../components/Form';
import '../styles/pagebook.css';

function Books() {
  return (
    <div>
      <BookList />
      <h2 className="titleAddBook">ADD NEW BOOK</h2>
      <Form />
    </div>
  );
}

export default Books;
