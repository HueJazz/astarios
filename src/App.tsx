import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Widget from './components/Widget';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Widget />
        <Footer />
    </div>
  );
}

export default App;
