import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../app/hooks';
import { RootState } from '../../app/store';
import { HomemadeSubmissionForm, PizzaData } from './HomeMadeSubmission';
import { TakeoutSubmissionForm, TakeoutPizzaData } from './TakeoutSubmission';
const SelectForm: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.app.selectedOption);

  const handleOptionChange = (option: string) => {
    dispatch(setSelectedOption(option));
  };

  const handleFormSubmit = (pizzaData: PizzaData) => {
    console.log('Form data submitted in ParentComponent:', pizzaData);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="homemade"
            checked={selectedOption === 'homemade'}
            onChange={() => handleOptionChange('homemade')}
          />
          Homemade
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="takeout"
            checked={selectedOption === 'takeout'}
            onChange={() => handleOptionChange('takeout')}
          />
          Takeout
        </label>
      </div>

      {selectedOption === 'homemade' ? (
        <HomemadeSubmissionForm onSubmit={handleFormSubmit} />
      ) : (
        <TakeoutSubmissionForm onSubmit={handleFormSubmit} />
        
      )}
    </div>
  );
};

export default SelectForm;
// src/components/SelectForm.js
// src/components/SelectForm.tsx

