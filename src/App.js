// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
      <Router>
          <div>
              <Header />
              <Body />
              <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>

          </div>
      </Router>
  );
}


export default App;
