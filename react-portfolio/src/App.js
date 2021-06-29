import BrowserRouter  from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import PortfolioContent from './components/PortfolioContent';

function App() {
  return (
    <>
      <NavBar />
      < LandingPage />
      <AboutMe />
      <PortfolioContent />
    </>
  );
}

export default App;
