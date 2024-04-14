import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './containers/home';


function App() {

  return (
    <div className="App">
      {/* navbar
      <Navbar /> */}

      {/* main page content */}
      <div className='App_main-page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
