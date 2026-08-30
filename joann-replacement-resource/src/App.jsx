//import React from 'react';
import './App.css'
import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import StoreDetailsPage from './components/pages/stores/StoreDetailsPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import { storeDetails } from './stores-data/storeDetails.js';


function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [stores, setStores] = useState(storeDetails);
  const [about, setAbout] = useState([]);

  return (
    <div>
      <Header/> 
        {currentPage === "home" && (<HomePage setCurrentPage={setCurrentPage} />)}
        {currentPage === "stores" && (
          <StoreDetailsPage 
            stores={stores}
            setStores={setStores}
          />
        )}
        {currentPage === "about" && (
          <AboutPage
            about={about}
            setAbout={setAbout}
          />
          )}
      <Footer/>
    </div>
  );
};

export default App;
