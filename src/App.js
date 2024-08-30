import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import AirtimeToCash from './pages/AirtimeToCash';
import HelpAndSupport from './pages/HelpAndSupport';
import TransactionHistory from './pages/TransactionHistroy';
import UnDone from './pages/UnDone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/buy-airtime" element={<UnDone />} />
        <Route path="/buy-data" element={<UnDone />} />
        <Route path="/tv-subscription" element={<UnDone />} />
        <Route path="/pay-electric-bill" element={<UnDone />} />
        <Route path="/airtime-to-cash" element={<AirtimeToCash />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/help-support" element={<HelpAndSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
