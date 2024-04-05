import React from 'react';
import Trauthor from './Trauthor';

const TableAuthor = ({ authors, handleauthoredit, handleauthordelete, handleedit }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Author Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Biography</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <Trauthor
              key={index}
              index={index}
              author={author}
              handleauthordelete={() => handleauthordelete(author.id)}
              handleauthoredit={() => {
                handleauthoredit(author.id);
                handleedit(author);
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableAuthor;
