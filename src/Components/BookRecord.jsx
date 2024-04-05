import React from 'react';
import { useFormik } from 'formik';

const BookRecord = ({ handlebooksubmit, editedBook }) => {
  const formik = useFormik({
    initialValues: {
      title: editedBook ? editedBook.title : "",
      author: editedBook ? editedBook.author : "",
      isbnNumber: editedBook ? editedBook.isbnNumber : "",
      publication: editedBook ? editedBook.publication : "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "Please Enter Title";
      }

      if (!values.author) {
        errors.author = "Please Enter Author";
      }

      if (!values.isbnNumber) {
        errors.isbnNumber = "Please Enter Isbn Number";
      }

      if (!values.publication) {
        errors.publication = "Please Enter Publication";
      }

      return errors;
    },
    onSubmit: (values) => {
      handlebooksubmit(values);
    },
  });

  return (
    <div className='container'>
      <div className='row'>
        <h1>Book Record</h1>
        <div className='col-lg-12'>
          <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              {formik.errors.title && <div className="text-danger">{formik.errors.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
                value={formik.values.author}
                onChange={formik.handleChange}
              />
              {formik.errors.author && <div className="text-danger">{formik.errors.author}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="isbnNumber">ISBN Number:</label>
              <input
                type="text"
                id="isbnNumber"
                name="isbnNumber"
                className="form-control"
                value={formik.values.isbnNumber}
                onChange={formik.handleChange}
              />
              {formik.errors.isbnNumber && <div className="text-danger">{formik.errors.isbnNumber}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="publication">Publication Date:</label>
              <input
                type="date"
                id="publication"
                name="publication"
                className="form-control"
                value={formik.values.publication}
                onChange={formik.handleChange}
              />
              {formik.errors.publication && <div className="text-danger">{formik.errors.publication}</div>}
            </div>

            <input type="submit" className='btn btn-primary mt-2' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookRecord;
