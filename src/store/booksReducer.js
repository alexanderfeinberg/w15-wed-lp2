import books from "../data/initial-books.json";

const normalizeData = (data = books) => {
  const normalized = {};
  data.forEach((book) => (normalized[book.id] = book));
  return normalized;
};
const initialState = normalizeData();

const booksReducer = (state = initialState, action) => {
  return state;
};

export default booksReducer;
