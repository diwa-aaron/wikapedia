import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialects from './dialects/Dialects';
import Home from './home/Home';
import Carousel from './carousel/Carousel';
import Tagalog from './dialects/TagalogPage';
import Cebuano from './dialects/CebuanoPage';
import Ilokano from './dialects/IlokanoPage';
import Waray from './dialects/WarayPage';
import Pangasinan from './dialects/PangasinanPage';
import Main from './main/Main';
import About from './about/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialects" element={<Dialects />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/tagalog" element={<Tagalog />} />
        <Route path="/cebuano" element={<Cebuano />} />
        <Route path="/ilokano" element={<Ilokano />} />
        <Route path="/waray" element={<Waray />} />
        <Route path="/pangasinan" element={<Pangasinan />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;