import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Containers/Home';
import Items from './Components/Items';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }>
          <Route index element={ <Items/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
