import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/recipes?q=${query}`);
      setSearchResults(response.data.receipe);
      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching data.');
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        { searchResults.map((recipes) => (
          <li key={recipes.id}>
            <h3>{recipes.title}</h3>
            <p>{recipes.description}</p>
            <ul>
              {recipes.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipes.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
