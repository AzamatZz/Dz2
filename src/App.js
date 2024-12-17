import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './pages/AboutPage'
import CatsPage from './pages/CatsPage';
import HomesPage from './pages/HomesPage';
import CitiesPage from './pages/CitiesPage';
import DogsPage from './pages/DogsPage';
import WeaponsPage from './pages/WeaponsPage';
import AppNavbar from './pages/Navbar';




function App() {
    return (
        <BrowserRouter>
            <AppNavbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/cats" element={<CatsPage />} />
                    <Route path="/homes" element={<HomesPage />} />
                    <Route path="/cities" element={<CitiesPage />} />
                    <Route path="/dogs" element={<DogsPage />} />
                    <Route path="/weapons" element={<WeaponsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
