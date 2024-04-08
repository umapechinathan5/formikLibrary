
import React, { useState } from 'react';
import Trauthor from './Trauthor';

const TableAuthor = ({ authors, handleauthoredit, handleauthordelete, handleedit }) => {
  const [editMode, setEditMode] = useState(false);

  

  return (
    <div style={{ position: 'relative', left: "300px", width: "80%" }}>
      <table class="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Author Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Biography</th>
            <th scope="col-2">Actions</th>
          </tr>
        </thead>
        <tbody className='table-dark'>
          {authors.map((author, index) => (
            <Trauthor
              key={index}
              index={index}
              author={author}
              handleauthordelete={handleauthordelete}
              handleauthoredit={handleauthoredit}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAuthor;
