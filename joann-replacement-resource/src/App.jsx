//import React from 'react';
//import './App.css'
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import StoreDetailsPage from './components/pages/stores/StoreDetailsPage.jsx';
import AboutPage from './components/pages/about/AboutPage.jsx';
import { storeDetails } from './components/pages/stores/stores-data/storeDetails.js';
import { useState } from 'react';

//import StoreForm from './components/form/StoreForm';



function App() {

const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header/> 
      {currentPage === "home" && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === "stores" && <StoreDetailsPage stores={storeDetails} />}
      <Footer/>
    </div>
  );
};

export default App;
