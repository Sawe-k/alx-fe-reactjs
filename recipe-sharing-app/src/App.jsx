import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <Router>
       <div style={{ width: '50%', margin: 'auto', marginTop: '40px' }}>
      <h1>Recipe Sharing App</h1>
        <SearchBar />
        <RecipeList />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route
            path="/recipes/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
}

import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;