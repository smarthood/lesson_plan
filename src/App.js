import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Todo from './components/todo';
import Navbar from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    </div>
  );
}

export default App;
