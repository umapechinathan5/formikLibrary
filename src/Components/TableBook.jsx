import React from 'react';
import Trbook from './Trbook';

const TableBook = ({ books, handlebookedit, handlebookdelete, handleedit }) => {
  return (
    <div style={{position:'relative',left:"300px",width:"70%"}}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Publication Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Trbook
              key={index}
              index={index}
              book={book}
              handlebookdelete={() => handlebookdelete(book.id)}
              handlebookedit={() => {
                handlebookedit(book.id);
                handleedit(book);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableBook;
