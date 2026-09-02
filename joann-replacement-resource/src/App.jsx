import './App.css'
import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import StoreDetailsPage from './components/pages/stores/StoreDetailsPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import { storeDetails } from './stores-data/storeDetails.js';
import { Navigate, Route, Routes } from 'react-router';


function App() {

  const [stores, setStores] = useState(storeDetails);
  const [about, setAbout] = useState([]);

  return (
    <div>
      <Header/> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/stores" element={<StoreDetailsPage 
            stores={stores}
            setStores={setStores}
          />} />
        <Route path="/about" element={<AboutPage
            about={about}
            setAbout={setAbout}
          />} />
        <Route path="*" element={<Navigate to="/" />} />
          
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
