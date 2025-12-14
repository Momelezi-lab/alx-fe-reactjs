import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Step 3a: Define validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => {
  // Step 3b: Initial values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Step 3c: Handle submission
  const handleSubmit = (values, { resetForm }) => {
    // Simulate API call
    console.log('Formik Form submitted:', values);
    alert('Registration successful with Formik! Check console.');
    resetForm();
  };

  return (
    <div>
      <h2>User Registration with Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="span" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="span" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="span" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register with Formik</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;