import books from "../data/initial-books.json";

const LOAD_BOOKS = "books/loadBooks";
const LOAD_BOOK = "books/loadBook";
const DELETE_BOOK = "books/deleteBook";
const ADD_BOOK = "books/addBook";
const RESET_DATA = "books/reset";

export const loadBooks = () => {
  return { type: LOAD_BOOKS };
};

export const deleteBookAction = (book) => {
  return { type: DELETE_BOOK, book: book };
};

export const loadBook = (book) => {
  return { type: LOAD_BOOK, book: book };
};

export const addBook = (book) => {
  return { type: ADD_BOOK, book: book };
};

export const resetData = () => {
  return { type: RESET_DATA };
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
    case DELETE_BOOK:
      const newState = { ...state };
      delete newState[action.book.id];
      return newState;
    case LOAD_BOOK:
      return { ...state };
    case ADD_BOOK:
      return { ...state, [action.book.id]: action.book };
    case RESET_DATA:
      return normalizeData();
    default:
      return state;
  }
};

export default booksReducer;
