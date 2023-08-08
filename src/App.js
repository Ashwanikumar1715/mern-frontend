import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import './App.css';
import Logout from './components/Logout';
import { reducer, initialState } from './reducer/UseReducer'; // Correct the import path
import { Footer } from './components/Footer';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}> {/* Include the state and dispatch values */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      <Footer/>
      </UserContext.Provider>
    </>
  );
}

export default App;
