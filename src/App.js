import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  // console.log("News Application");
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News category="general" />} />
          <Route exact path="/business" element={<News category="business" />} />
          <Route exact path="/entertainment" element={<News category="entertainment" />} />
          <Route exact path="/health" element={<News category="health" />} />
          <Route exact path="/science" element={<News category="science" />} />
          <Route exact path="/sports" element={<News category="sports" />} />
          <Route exact path="/technology" element={<News category="technology" />} />
          <Route exact path="/:keyword" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
