import logo from './logo.svg';
import './App.css';
import ProjectBoard from './components/ProjectBoard';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Project Board</h1>
      <ProjectBoard />
    </div>
  );
}

export default App;
