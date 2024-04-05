import React, { useState } from 'react';

const Trauthor = ({ index, author, handleauthoredit, handleauthordelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedAuthor, setEditedAuthor] = useState(author);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditedAuthor(author);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAuthor({ ...editedAuthor, [name]: value });
  };

  const handleSave = () => {
    handleauthoredit(editedAuthor);
    setEditMode(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      {editMode ? (
        <>
          <td><input type="text" name="authorName" value={editedAuthor.authorName} onChange={handleChange} /></td>
          <td><input type="text" name="birthDate" value={editedAuthor.birthDate} onChange={handleChange} /></td>
          <td><input type="text" name="biography" value={editedAuthor.biography} onChange={handleChange} /></td>
        </>
      ) : (
        <>
          <td>{author.authorName}</td>
          <td>{author.birthDate}</td>
          <td>{author.biography}</td>
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
            <button onClick={handleauthordelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Trauthor;
