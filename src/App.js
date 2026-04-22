// ============================================
// App.js — Main Router + Layout
// ============================================
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Page wrapper with fade-in
function PageWrapper({ children }) {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{
              minHeight: '80vh', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', padding: '2rem',
              paddingTop: '100px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>📚</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                404
              </h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Looks like this page doesn't exist. Let's get you back on track.
              </p>
              <a href="/" className="btn-primary">Go to Home</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}
