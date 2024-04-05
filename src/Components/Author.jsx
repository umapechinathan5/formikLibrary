import React from 'react';
import { useFormik } from 'formik';

const Author = ({ handleauthorsubmit, editedAuthor }) => {
  const formik = useFormik({
    initialValues: {
      authorName: editedAuthor ? editedAuthor.authorName : "",
      birthDate: editedAuthor ? editedAuthor.birthDate : "",
      biography: editedAuthor ? editedAuthor.biography : "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.authorName) {
        errors.authorName = "Please Enter Author Name";
      }

      if (!values.birthDate) {
        errors.birthDate = "Please Enter Birth Date";
      }

      if (!values.biography) {
        errors.biography = "Please Enter Short Biography";
      }

      return errors;
    },
    onSubmit: (values) => {
      handleauthorsubmit(values);
    },
  });

  return (
    <div className='container'>
      <div className='row'>
        <h1>Author Record</h1>
        <div className='col-lg-12'>
          <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
              <label htmlFor="authorName">Author Name:</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                className="form-control"
                value={formik.values.authorName}
                onChange={formik.handleChange}
              />
              {formik.errors.authorName && <div className="text-danger">{formik.errors.authorName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Birth Date:</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                className="form-control"
                value={formik.values.birthDate}
                onChange={formik.handleChange}
              />
              {formik.errors.birthDate && <div className="text-danger">{formik.errors.birthDate}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="biography">Biography:</label>
              <textarea
                id="biography"
                name="biography"
                className="form-control"
                value={formik.values.biography}
                onChange={formik.handleChange}
              />
              {formik.errors.biography && <div className="text-danger">{formik.errors.biography}</div>}
            </div>

            <input type="submit" className='btn btn-primary mt-2' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Author;
