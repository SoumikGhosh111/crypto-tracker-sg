import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboardpage from './pages/DashboardPage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchList from './pages/WatchList';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Common/Footer';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboardpage />}/>
          <Route path='/coin/:id' element={<CoinPage />}/>
          <Route path='/compare' element={<ComparePage />}/>
          <Route path='/watchlist' element={<WatchList />}/>  
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
