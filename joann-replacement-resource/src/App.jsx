//import React from 'react';
import { useState } from 'react';
//import './App.css'
import Footer from './components/layout/Footer';
import StoreDetailsPage from './components/pages/StoreDetailsPage';
import Header from './components/layout/Header';
//import StoreForm from './components/form/StoreForm';
import { storeDetails } from './components/pages/stores-data/storeDetails';  


function App() {

  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage} === 'home' && <MainPage setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <StoreDetailsPage store={storeDetails} />}
    
      <Footer />
    </div>
  );
};

export default App;
