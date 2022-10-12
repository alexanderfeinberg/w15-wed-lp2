import { Link } from "react-router-dom";
import BookIndexItem from "./BookIndexItem";
import { useSelector, useDispatch } from "react-redux";

const BooksIndex = () => {
  const booksSub = useSelector((state) => state.books);
  const books = [];
  for (let book of Object.keys(booksSub)) {
    books.push(booksSub[book]);
  }

  let dispatch = useDispatch();
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
