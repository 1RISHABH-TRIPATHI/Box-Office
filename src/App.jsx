import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home';
import Starred from './pages/Sharred';
import MainPageLayout from './Component/MainPageLayout';
import Show from './pages/Show';
import { GlobalTheme } from './theme';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainPageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />
            <Route path="*" element={<div>No Found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
