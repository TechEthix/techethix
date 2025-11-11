import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import './assets/styles/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;