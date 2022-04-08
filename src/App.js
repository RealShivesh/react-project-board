import logo from './logo.svg';
import './App.css';
import ProjectBoard from './components/ProjectBoard';

function App() {
  return (
    <div className="App">
      <h1>Project Board</h1>
      <div>
        Tasks:
        <br />
        1. Create a localstorage array for the project board
        <br />
        2. Create a localstorage array for the cards
        <br />
        3. Fetch the data from localstorage
        <br />
        4. When a user clicks on start, the status changes
        <br />
        5. When a user clicks on stop, the status changes
        <br />
        6. When a user clicks on delete, the card is removed
        <br />
        7. When a user clicks on add, a new card is added
        <br />
      </div>
      <ProjectBoard />
    </div>
  );
}

export default App;
