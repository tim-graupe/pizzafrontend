import React, { useState } from "react";


interface PizzaProps {
  onSubmit: (pizzaData: PizzaData) => void
}

export interface PizzaData {
  name: string;
  style: string;
  recipe: string;
}

export const HomemadeSubmissionForm: React.FC<PizzaProps> = ({onSubmit}) => {
  const [pizzaData, setPizzaData] = useState<PizzaData>({
    name: "",
    style: "",
    recipe: ""
  })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setPizzaData({...pizzaData, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Pizza submitted: ", pizzaData)
  }

  return (
    <form onSubmit={handleSubmit}>
            <label>
        Name:
        <input
          type="text"
          name="name"
          value={pizzaData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Style:
        <input
          type="text"
          name="style"
          value={pizzaData.style}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />

      <label>
        Recipe:
        <input
          type="text"
          name="recipe"
          value={pizzaData.recipe}
          onChange={handleInputChange}
          // required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}