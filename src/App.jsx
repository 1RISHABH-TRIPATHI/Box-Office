import {BrowserRouter,Routes,Route  } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import MainPageLayout from './Component/MainPageLayout';
import Show from './pages/Show';
function App() {
  return <>
    <BrowserRouter>
      <Routes>
       <Route element={<MainPageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
       </Route>
       <Route path='/show/:showid' element ={<Show />} />
       <Route path='*' element={<div>No Found</div>} />
      </Routes>    
    </BrowserRouter>
  </>
}

export default App;
