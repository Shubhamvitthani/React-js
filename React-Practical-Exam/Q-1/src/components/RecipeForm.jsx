import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../Action/recipeActions';
import { useNavigate } from 'react-router-dom';
import './RecipeForm.css'; // 👈 Make sure this CSS file exists

export default function RecipeForm() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    category: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.ingredients) return;

    const recipe = {
      ...form,
      dateAdded: new Date().toISOString(),
      author: user
    };

    dispatch(addRecipe(recipe));
    nav('/');
  };

  return (
    <div className="recipe-container">
      <div className="form-box">
        <h4 className="form-title">👨‍🍳 Welcome, {user}! Add Your Recipe</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            placeholder="🍽️ Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="input-field"
            placeholder="🧂 Ingredients"
            value={form.ingredients}
            onChange={e => setForm({ ...form, ingredients: e.target.value })}
          />
          <input
            className="input-field"
            placeholder="📂 Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />
          <button type="submit" className="submit-btn">Add Recipe</button>
        </form>
      </div>
    </div>
  );
}
