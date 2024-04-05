import React from 'react';

const Trauthor = ({ index, author, handleauthoredit, handleauthordelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{author.authorName}</td>
      <td>{author.birthDate}</td>
      <td>{author.biography}</td>
      <td>
        <button onClick={handleauthoredit}>Edit</button>
        <button onClick={handleauthordelete}>Delete</button>
      </td>
    </tr>
  )
}

export default Trauthor;
