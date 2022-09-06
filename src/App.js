import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CountryData from './components/CountryData';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryData />} />
      </Routes>
    </Router>
  );
}

export default App;
