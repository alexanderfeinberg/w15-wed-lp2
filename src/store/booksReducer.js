import books from "../data/initial-books.json";

const LOAD_BOOKS = "books/loadBooks";

const loadBooks = () => {
  return { type: LOAD_BOOKS };
};

const normalizeData = (data = books) => {
  const normalized = {};
  data.forEach((book) => (normalized[book.id] = book));
  console.log(normalized);
  return normalized;
};
const initialState = normalizeData();

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state };
    default:
      return state;
  }
};

export default booksReducer;
