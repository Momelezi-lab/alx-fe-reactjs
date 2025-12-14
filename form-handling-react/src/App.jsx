import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>Form Handling Project</h1>
      <h2>Controlled Components Version</h2>
      <RegistrationForm />
      <hr />
      <h2>Formik Version</h2>
      <FormikForm />
    </div>
  );
}

export default App;