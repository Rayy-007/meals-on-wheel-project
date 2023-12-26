import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../login/AuthContext';

const MealForm = () => {
    const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [mealName, setMealName] = useState('');
  const [mealDesc, setMealDesc] = useState('');

  const partnerId = user?.partnerId || null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMealNameChange = (e) => {
    setMealName(e.target.value);
  };

  const handleMealDescChange = (e) => {
    setMealDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to send files and other data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('mealName', mealName);
      formData.append('mealDesc', mealDesc);

      // Make a POST request to the backend
      const response = await axios.post(
        `http://localhost:8080/meal-api/${partnerId}/add`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', response.data);
      // Handle the response accordingly
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle the error accordingly
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <label>
        Meal Name:
        <input type="text" value={mealName} onChange={handleMealNameChange} />
        Meal Desc:
        <input type="text" value={mealDesc} onChange={handleMealDescChange} />
      </label>
      <br />
      <label>
        File:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Upload Meal</button>
    </form>
    </div>
    
  );
};

export default MealForm;