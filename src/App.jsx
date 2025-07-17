// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import Dialects from './dialects/Dialects';
import Tagalog from './dialects/TagalogPage';
import Cebuano from './dialects/CebuanoPage';
import Ilokano from './dialects/IlokanoPage';
import Waray from './dialects/WarayPage';
import Pangasinan from './dialects/PangasinanPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dialects />} />
        <Route path="/tagalog" element={<Tagalog />} />
        <Route path="/cebuano" element={<Cebuano />} />
        <Route path="/ilokano" element={<Ilokano />} />
        <Route path="/waray" element={<Waray />} />
        <Route path="/pangasinan" element={<Pangasinan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;