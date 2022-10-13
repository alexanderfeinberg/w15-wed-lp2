import React from "react";
import { Link } from "react-router-dom";
import { deleteBookAction } from "../store/booksReducer";
import { useDispatch } from "react-redux";

const BookIndexItem = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(deleteBookAction(book));
  };

  return (
    <li key={book.id}>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
