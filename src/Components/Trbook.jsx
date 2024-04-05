import React, { useState } from 'react';

const Trbook = ({ index, book, handlebookedit, handlebookdelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditedBook(book);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleSave = () => {
    handlebookedit(editedBook);
    setEditMode(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      {editMode ? (
        <>
          <td><input type="text" name="title" value={editedBook.title} onChange={handleChange} /></td>
          <td><input type="text" name="author" value={editedBook.author} onChange={handleChange} /></td>
          <td><input type="text" name="isbnNumber" value={editedBook.isbnNumber} onChange={handleChange} /></td>
          <td><input type="date" name="publication" value={editedBook.publication} onChange={handleChange} /></td>
        </>
      ) : (
        <>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.isbnNumber}</td>
          <td>{book.publication}</td>
        </>
      )}
      <td>
        {editMode ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handlebookdelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Trbook;
