import BrowserRouter  from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      < LandingPage />
    </>
  );
}

export default App;
