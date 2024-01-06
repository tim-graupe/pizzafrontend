import React from 'react';
import SelectForm from './components/submissionForms/SelectForm';
import { Register, UserData } from './components/auth/register';
import { Login } from './components/auth/login';

const App: React.FC = () => {
  const handleFormSubmit = (pizzaData: UserData) => {
    console.log('Form data submitted in ParentComponent:', pizzaData);
  };
  return (
    <div>
      <Login  onSubmit={handleFormSubmit} />
      <Register onSubmit={handleFormSubmit} />
      {/* <SelectForm /> */}
    </div>
  );
};

export default App;
