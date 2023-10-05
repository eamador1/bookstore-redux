import React, { useState } from 'react';
import '../styles/form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();
    const itemId = uuidv4(); // Generate itemId using uuidv4
    dispatch(addBook({ title, author, itemId }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="bookForm" onSubmit={handleAddBook}>
      <input
        className="title"
        name="title"
        placeholder="Book Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="author"
        name="author"
        placeholder="Author"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" className="submit">
        ADD
      </button>
    </form>
  );
}

export default Form;
