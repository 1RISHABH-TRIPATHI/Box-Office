import {BrowserRouter,Routes,Route  } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Home from './pages/home';
import Contact from './pages/Sharred';
import MainPageLayout from './Component/MainPageLayout';
import Show from './pages/Show';
const queryClient= new QueryClient();
function App() {
  return (
  
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
       <Route element={<MainPageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
       </Route>
       <Route path="/show/:showId" element ={<Show/>} />

       <Route path='*' element={<div>No Found</div>} />
      </Routes>    
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
