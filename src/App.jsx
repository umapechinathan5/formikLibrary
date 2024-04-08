import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookRecord from "./Components/BookRecord";
import Author from "./Components/Author";
import TableAuthor from "./Components/TableAuthor";
import TableBook from "./Components/TableBook";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editedBook, setEditedBook] = useState(null);
  const [editedAuthor, setEditedAuthor] = useState(null);
  


  const generateID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

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

 const handleBookDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAuthorDelete = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/BookRecord"} element={<BookRecord handlebooksubmit={handleBookSubmit} editedBook={editedBook} generateID={generateID} />} />
          <Route path={"/Author"} element={<Author handleauthorsubmit={handleAuthorSubmit} editedAuthor={editedAuthor} generateID={generateID} />} />
          <Route path={"/TableAuthor"} element={<TableAuthor authors={authors} handleauthoredit={handleAuthorEdit} handleauthordelete={handleAuthorDelete}  />} />
          <Route path={"/TableBook"} element={<TableBook books={books} handlebookedit={handleBookEdit} handlebookdelete={handleBookDelete}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
