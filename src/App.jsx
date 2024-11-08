import React from 'react';
import Header from './Components/Header';  // Import the Header component
import './App.css';  // Import your custom CSS for App

function App() {
  return (
    <div className="App">
      <Header />  {/* Render the Header component here */}
    </div>
  );
}

export default App;  // Export App component for use in index.js
