import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../src/app/hooks';
import { RootState } from '../src/app/store'; // Import RootState type

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.app.selectedOption);

  const handleOptionChange = (option: string) => {
    dispatch(setSelectedOption(option));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
          Option 2
        </label>
      </div>

      {selectedOption === 'option1' ? (
        <p>hi</p>
        // <Form1 /* ...props for Form1 */ />
      ) : (
        <p>hey</p>
        // <Form2 /* ...props for Form2 */ />
      )}
    </div>
  );
};

export default MyComponent;
