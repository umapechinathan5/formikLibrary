import React, { useState } from 'react';
import { useFormik } from 'formik';

const Trbook = ({ index, book, handlebookedit, handlebookdelete }) => {
  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: book.title,
      author: book.author,
      isbnNumber: book.isbnNumber,
      publication: book.publication,
    },
    onSubmit: (values) => {
      handlebookedit({ ...book, ...values });
      setEditMode(false);
    },
  });

  return (
    <tr>
      <td>{index + 1}</td>
      {editMode ? (
        <>
          <td>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="isbnNumber"
              value={formik.values.isbnNumber}
              onChange={formik.handleChange}
            />
          </td>
          <td>
            <input
              type="date"
              name="publication"
              value={formik.values.publication}
              onChange={formik.handleChange}
            />
          </td>
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
            <button type="submit" onClick={formik.handleSubmit}>Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning" onClick={() => setEditMode(true)}>Edit</button>
            <button className="btn btn-danger ml-5" onClick={() => handlebookdelete(book.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Trbook;
