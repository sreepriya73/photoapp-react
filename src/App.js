import logo from './logo.svg';
import './App.css';
import AddPhoto from './component/AddPhoto';
import SearchPhoto from './component/SearchPhoto';
import DeletePhoto from './component/DeletePhoto';
import ViewPhoto from './component/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPhoto/>}/>
      <Route path='/search' element={<SearchPhoto/>}/>
      <Route path='/delete' element={<DeletePhoto/>}/>
      <Route path='/view' element={<ViewPhoto/>}/>
    </Routes>
    </BrowserRouter>

  )
    
  
}
  
export default App

