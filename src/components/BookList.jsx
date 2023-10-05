import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { bookItems } = useSelector((store) => store.books);
  return (
    <section className="book">
      <div>
        {bookItems.map((item) => (
          <Book
            key={item.itemId}
            title={item.title}
            author={item.author}
          />
        ))}

      </div>
    </section>
  );
};

export default BookList;
