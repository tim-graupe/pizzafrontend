import React, { ChangeEvent, FormEvent, useState } from 'react';

interface PizzaProps {
  onSubmit: (pizzaData: PizzaData) => void;
}

export interface PizzaData {
  name: string;
  style: string;
  recipe: string;
  photo: File | null;
}

export const HomemadeSubmissionForm: React.FC<PizzaProps> = ({ onSubmit }) => {
  const [formData, setPizzaData] = useState<PizzaData>({
    name: '',
    style: '',
    recipe: '',
    photo: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPizzaData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPizzaData({
        ...formData,
        photo: file,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append('name', formData.name);
      formDataWithFile.append('style', formData.style);
      formDataWithFile.append('recipe', formData.recipe);
      formDataWithFile.append('photo', formData.photo as Blob);

      const response = await fetch('http://localhost:4000/new_pizza', {
        method: 'POST',
        body: formDataWithFile,
      });

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error sending the request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="style">Style:</label>
      <input
        type="text"
        id="style"
        name="style"
        value={formData.style}
        onChange={handleChange}
        required
      />

      <label htmlFor="recipe">Recipe:</label>
      <textarea
        id="recipe"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
        required
      />

      <label htmlFor="photo">Photo:</label>
      <input type="file" id="photo" name="photo" onChange={handleFileChange} accept="image/*" />

      {formData.photo && (
        <img
          src={URL.createObjectURL(formData.photo)}
          alt="Pizza Preview"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
};
