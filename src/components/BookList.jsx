import React from 'react';
import Book from './Book';
import Button from './Button';

function BookList() {
  return (
    <>
      <Book category="Action" title="The Hunger Games" author="Suzanne Collins" />
      <Button>Comments</Button>
      <Button>Remove</Button>
      <Button>Edit</Button>
      <Book category="Science Fiction" title="Dune" author="Frank Herbert" />
      <Button>Comments</Button>
      <Button>Remove</Button>
      <Button>Edit</Button>
      <Book category="Economy" title="Capital in theTwenty-First Century" author="Suzanne Collins" />
      <Button>Comments</Button>
      <Button>Remove</Button>
      <Button>Edit</Button>
    </>
  );
}

export default BookList;
