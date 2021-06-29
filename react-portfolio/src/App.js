import BrowserRouter  from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <NavBar />
      < LandingPage />
      <AboutMe />
    </>
  );
}

export default App;
