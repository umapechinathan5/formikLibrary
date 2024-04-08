import React, { useState } from 'react';
import { useFormik } from 'formik';

const Trauthor = ({ index, author, handleauthoredit, handleauthordelete }) => {
  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      authorName: author.authorName,
      birthDate: author.birthDate,
      biography: author.biography,
    },
    onSubmit: (values) => {
      handleauthoredit({ ...author, ...values });
      setEditMode(false);
    },
  });

  const handleDelete = () => {
    handleauthordelete(author.id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      {editMode ? (
        <>
          <td>
            <input
              type="text"
              name="authorName"
              value={formik.values.authorName}
              onChange={formik.handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="birthDate"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="biography"
              value={formik.values.biography}
              onChange={formik.handleChange}
            />
          </td>
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
            <button type="submit" onClick={formik.handleSubmit}>Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning" onClick={() => setEditMode(true)}>Edit</button>
            <button className="btn btn-danger ml-5" onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Trauthor;
