import Home from './Pages/Home';
import Works from './Pages/Works';
import About from './Pages/About';
import Contacts from './Pages/Contacts'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/work' element={<Works/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contacts/>} />
    </Routes>
  );
}

export default App;
