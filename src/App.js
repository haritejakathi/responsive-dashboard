import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Sidebar />
        <Dashboard />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
