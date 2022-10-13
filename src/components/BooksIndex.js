import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loadBooks } from "../store/booksReducer";
import BookIndexItem from "./BookIndexItem";
import { useSelector, useDispatch } from "react-redux";

const BooksIndex = () => {
  let dispatch = useDispatch();

  const booksSub = useSelector((state) => state.books);
  const books = Object.values(booksSub);

  useEffect(() => {
    console.log("useEffect");
    dispatch(loadBooks());
  }, [dispatch]);

  const resetBookData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ul>
        {books.map((book) => (
          <BookIndexItem book={book} key={book.id} />
        ))}
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
};

export default BooksIndex;
