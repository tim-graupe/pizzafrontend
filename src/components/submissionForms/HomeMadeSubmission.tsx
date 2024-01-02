import React, { ChangeEvent, FormEvent, useState } from "react";

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
    photo: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPizzaData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/new_pizza', {
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

      <button type="submit">Submit</button>
    </form>
  );
};
