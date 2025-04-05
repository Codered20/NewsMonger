import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';
// import { useContext } from 'react';
// import { AppContext } from './components/context/context';

function App() {
  console.log("News Application");
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/NewsMonger" element={<News category="general" />} />
          <Route exact path="/NewsMonger/business" element={<News category="business" />} />
          <Route exact path="/NewsMonger/entertainment" element={<News category="entertainment" />} />
          <Route exact path="/NewsMonger/health" element={<News category="health" />} />
          <Route exact path="/NewsMonger/science" element={<News category="science" />} />
          <Route exact path="/NewsMonger/sports" element={<News category="sports" />} />
          <Route exact path="/NewsMonger/technology" element={<News category="technology" />} />
          <Route exact path="/NewsMonger/keyword" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
