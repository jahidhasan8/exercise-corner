import './App.css';
import Exercises from './components/Exercises/Exercises';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <Header></Header>
        <Exercises></Exercises>
        <Questions></Questions>
    </div>
  );
}

export default App;
