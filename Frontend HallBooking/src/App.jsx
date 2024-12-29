import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingTable from './components/BookingTable';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookingTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
