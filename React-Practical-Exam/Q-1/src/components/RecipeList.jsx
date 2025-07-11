import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../Action/recipeActions';
import RecipeDetails from './RecipeDetails';
import './RecipeList.css'; // 👈 Add this CSS file

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.items);
  const [sortBy, setSortBy] = useState('date');
  const [filterCat, setFilterCat] = useState('');

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const filtered = filterCat
    ? recipes.filter(r =>
        r.category.toLowerCase().includes(filterCat.toLowerCase())
      )
    : recipes;

  const sorted = [...filtered].sort((a, b) =>
    sortBy === 'name'
      ? a.title.localeCompare(b.title)
      : new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  return (
    <div className="recipe-list-container">
      <div className="filter-bar">
        <select
          className="filter-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="date">🕒 Sort by Date</option>
          <option value="name">🔤 Sort by Name</option>
        </select>
        <input
          className="filter-input"
          placeholder="🔍 Filter by Category"
          value={filterCat}
          onChange={e => setFilterCat(e.target.value)}
        />
      </div>

      {sorted.length > 0 ? (
        sorted.map(r => <RecipeDetails key={r.id} recipe={r} />)
      ) : (
        <p className="no-results">No recipes found. 🍽️</p>
      )}
    </div>
  );
}
