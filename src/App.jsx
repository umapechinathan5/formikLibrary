import "./App.css"
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookRecord from "./Components/BookRecord";
import Author from "./Components/Author";
import TableAuthor from "./Components/TableAuthor";
import TableBook from "./Components/TableBook";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editedBook, setEditedBook] = useState(null);
  const [editedAuthor, setEditedAuthor] = useState(null);

  const handleBookSubmit = (formData) => {
    setBooks([...books, formData]);
  };

  const handleAuthorSubmit = (formData) => {
    setAuthors([...authors, formData]);
  };

  const handleBookEdit = (editedBook) => {
    setBooks(books.map(book => (book.id === editedBook.id ? editedBook : book)));
    setEditedBook(null);
  };

  const handleAuthorEdit = (editedAuthor) => {
    setAuthors(authors.map(author => (author.id === editedAuthor.id ? editedAuthor : author)));
    setEditedAuthor(null);
  };

  const handleEditBook = (book) => {
    setEditedBook(book);
  };

  const handleEditAuthor = (author) => {
    setEditedAuthor(author);
  };

  const handleBookDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAuthorDelete = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/BookRecord"} element={<BookRecord handlebooksubmit={handleBookSubmit} editedBook={editedBook} />} />
          <Route path={"/Author"} element={<Author handleauthorsubmit={handleAuthorSubmit} editedAuthor={editedAuthor} />} />
          <Route path={"/TableAuthor"} element={<TableAuthor authors={authors} handleauthoredit={handleAuthorEdit} handleauthordelete={handleAuthorDelete} handleedit={handleEditAuthor} />} />
          <Route path={"/TableBook"} element={<TableBook books={books} handlebookedit={handleBookEdit} handlebookdelete={handleBookDelete} handleedit={handleEditBook} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
