import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Containers/Home';
import Items from './Components/Items';
import Item from './Components/Item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }>
          <Route index element={ <Items/> }/>
          <Route path='/item/:item_id' element= {<Item/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
