import { useState } from 'react';
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <p> {import.meta.env.VITE_APP_GITHUB_API_KEY}</p>
    </div>
  );
}

export default App;