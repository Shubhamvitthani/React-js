import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRecipe, deleteRecipe } from '../Action/recipeActions';
import './RecipeDetails.css'; // 👈 Create and include this CSS file

export default function RecipeDetails({ recipe }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(recipe);

  const handleUpdate = () => {
    dispatch(updateRecipe(form));
    setEditing(false);
  };

  const handleDelete = () => dispatch(deleteRecipe(recipe.id));

  return (
    <div className="recipe-card">
      <div className="card-content">
        {editing ? (
          <>
            <input
              className="input-field"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              className="input-field"
              value={form.ingredients}
              onChange={e => setForm({ ...form, ingredients: e.target.value })}
            />
            <input
              className="input-field"
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
            />
            <div className="button-group">
              <button className="btn save" onClick={handleUpdate}>💾 Save</button>
              <button className="btn cancel" onClick={() => setEditing(false)}>✖ Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h5 className="title">{recipe.title}</h5>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p className="date"><small>📅 Added: {new Date(recipe.dateAdded).toLocaleDateString()}</small></p>
            <div className="button-group">
              <button className="btn edit" onClick={() => setEditing(true)}>✏ Edit</button>
              <button className="btn delete" onClick={handleDelete}>🗑 Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
