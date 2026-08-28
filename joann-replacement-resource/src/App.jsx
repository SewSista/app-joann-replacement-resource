//import React from 'react';
//import './App.css'
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import StoreDetailsPage from './components/pages/StoreDetailsPage.jsx';
import StoreForm from './components/pages/StoreForm.jsx';
import { storeDetails } from './stores-data/storeDetails.js';
import { useState } from 'react';

function App() {

const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header/> 
      {currentPage === "home" && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === "stores" && <StoreDetailsPage stores={storeDetails} />}
      {currentPage === <StoreForm />}
      <Footer/>
    </div>
  );
};

export default App;
