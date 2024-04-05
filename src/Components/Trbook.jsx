import React from 'react';

const Trbook = ({ index, book, handlebookedit, handlebookdelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbnNumber}</td>
      <td>{book.publication}</td>
      <td>
        <button onClick={handlebookedit}>Edit</button>
        <button onClick={handlebookdelete}>Delete</button>
      </td>
    </tr>
  )
}

export default Trbook;
