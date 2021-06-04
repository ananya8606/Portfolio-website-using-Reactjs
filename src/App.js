import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeTabs from './components/HomeTabs';
import Footer from './components/footer';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src="https://i.ibb.co/Jr9Yf43/IMG-20210409-224531.jpg" 
           className="app-logo" alt="logo" 
          />
        <Header />
      </header>
      <HomeTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div></div>
  );
}

export default App;