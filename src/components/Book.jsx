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
    <section className="contBookSurrounding">
      <div className="contBook">
        <span className="category">Action</span>
        <h3 className="Title">{item.title}</h3>
        <span className="Suzanne-Collins">
          Author:
          {' '}
          {item.author}
        </span>
        <div className="allButtons">
          <button className="CommentsButton" type="button">Comments</button>
          <button className="RemoveButton" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="EditButton" type="button">Edit</button>
        </div>
      </div>
      <div className="Advance">
        <div className="contCircularBar">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask half">
                <div className="fill">
                  <div className="mask full">
                    <div className="inside-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="textAdvance">
          <span className="numericalAdvance">100%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="updateInformation">
        <div className="divisionContainer">
          <div className="verticalDivision" />
        </div>
        <div className="chapterUpdate">
          <span className="currentChapter">CURRENT CHAPTER</span>
          <span className="chapterNumber">CHAPTER 5</span>
          <button className="updateButton" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </section>
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
