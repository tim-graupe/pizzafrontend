import React, { useState, FormEvent, ChangeEvent } from "react";

interface UserProps {
  onSubmit: (data: UserData) => void;
}

export interface UserData {
  username: string;
  password: string;
}

export const Login: React.FC<UserProps> = ({ onSubmit }) => {
  const [userData, setUserData] = React.useState<UserData>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const requestData = {
        username: userData.username,
        password: userData.password,
      };
  
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      const result = await response.json();
      console.log(result);
      sessionStorage.setItem('user', JSON.stringify(result))
    } catch (error) {
      console.error('Error ===>:', error);
    }
  };
  
  const test = async () => {
    try {
 
      const response = await fetch('http://localhost:4000/users/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
        console.log(response);
    } catch (error) {
      console.error('Error ===>:', error);
    }
  }


  return (
<div>
  <button onClick={test}>Test</button>
<form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Email!!:      </label>

        <input
          type="email"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          required
        />
      <br />
      <label htmlFor="password">
        Password:
        </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
      <button type="submit">Submit</button>
    </form>
</div>
  );
};
