// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedOption } from '../../app/hooks';
// import { RootState } from '../../app/store';
// import { HomemadeSubmissionForm, PizzaData } from './HomeMadeSubmission';
// import { TakeoutSubmissionForm, TakeoutPizzaData } from './TakeoutSubmission';
// const SelectForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const selectedOption = useSelector((state: RootState) => state.app.selectedOption);

//   const handleOptionChange = (option: string) => {
//     dispatch(setSelectedOption(option));
//   };

//   const handleFormSubmit = (pizzaData: PizzaData) => {
//     console.log('Form data submitted in ParentComponent:', pizzaData);
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           <input
//             type="radio"
//             value="homemade"
//             checked={selectedOption === 'homemade'}
//             onChange={() => handleOptionChange('homemade')}
//           />
//           Homemade
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="radio"
//             value="takeout"
//             checked={selectedOption === 'takeout'}
//             onChange={() => handleOptionChange('takeout')}
//           />
//           Takeout
//         </label>
//       </div>

//       {selectedOption === 'homemade' ? (
//         <HomemadeSubmissionForm onSubmit={handleFormSubmit} />
//       ) : (
//         <TakeoutSubmissionForm onSubmit={handleFormSubmit} />
        
//       )}
//     </div>
//   );
// };

// export default SelectForm;
// src/components/SelectForm.js
// src/components/SelectForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  style: string;
  score: number
}

const SelectForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    style: '',
    score: 9
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/pizzas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error sending the request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="style">style:</label>
      <input
        type="text"
        id="style"
        name="style"
        value={formData.style}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SelectForm;
