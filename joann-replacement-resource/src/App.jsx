//import React from 'react';
import './App.css'
import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import StoreDetailsPage from './components/pages/stores/StoreDetailsPage.jsx';


function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [stores, setStores] = useState([]);

  return (
    <div>
      <Header/> 
      {currentPage === "home" && (<AboutPage setCurrentPage={setCurrentPage} />)}
      {currentPage === "stores" && (
        <StoreDetailsPage 
          stores={stores}
          setStores={setStores}
        />
      )}
      <Footer/>
    </div>
  );
};

export default App;
