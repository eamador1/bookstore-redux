import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import '../styles/bookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className="bookList">
      <div>
        {books.map((item) => ((
          <Book
            key={item.item_id}
            item={item}
          />
        )
        ))}

      </div>
    </section>
  );
};

export default BookList;
