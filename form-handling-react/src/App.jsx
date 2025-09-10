import { useState } from 'react'
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <RegistrationForm />
      <formikForm />
    </div>
  );
}

export default App;
