import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import LoginButton from './pages/Login';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<LoginButton/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
