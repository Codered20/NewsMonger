// import logo from './logo.svg';
import './App.css';

import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Route,
  HashRouter as Router,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(window.location.href)
    let url = window.location.href
    console.log(url)
    this.state = {
      progress: 0
    };
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    let arr = window.location.href.split("/")
    let Keyword = window.location.href.split("/")[arr.length - 1]
    console.log(Keyword);
    return (
      <div>
        <Router basename="/">
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} q={null} key="general" pageSize={24} country="in" category="general" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} q={null} key="general" pageSize={24} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} q={null} key="business" pageSize={24} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} q={null} key="entertainment" pageSize={24} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} q={null} key="health" pageSize={24} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} q={null} key="science" pageSize={24} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} q={null} key="sports" pageSize={24} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} q={null} key="technology" pageSize={24} country="in" category="technology" />} />
            <Route exact path="*" element={<News setProgress={this.setProgress} q={Keyword} key={Keyword} pageSize={24} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
// #endregion

export default App;