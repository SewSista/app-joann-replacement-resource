//import React from 'react';
//import { useState } from 'react';
//import './App.css'
import Footer from './components/layout/Footer';
import StoreDetailsPage from './components/pages/stores/StoreDetailsPage';
import Header from './components/layout/Header';
//import StoreForm from './components/form/StoreForm';



function App() {

  //const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Header/> 
      <div>
      {StoreDetailsPage}
      </div>
      
    
      <Footer />
    </div>
  );
};

export default App;
