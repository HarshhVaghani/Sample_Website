
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import img from '../assests/SPAlogo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/team', label: 'Our Team' },
  { path: '/testimonials', label: 'Results' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHome = location.pathname === '/';
  const isDark = isHome && !scrolled;

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled
          ? 'rgba(255,253,247,0.96)'
          : isHome ? 'transparent' : 'rgba(255,253,247,0.96)',
        backdropFilter: scrolled || !isHome ? 'blur(20px)' : 'none',
        boxShadow: scrolled || !isHome ? '0 2px 20px rgba(10,22,40,0.08)' : 'none',
        borderBottom: scrolled || !isHome ? '1px solid rgba(27,79,216,0.08)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <img
              src={img}
              alt="Study Point Academy Logo"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
                color: isDark ? '#FFFFFF' : 'var(--navy)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
              }}>
                STUDY POINT
              </div>
              <div style={{
                fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.65rem',
                color: isDark ? 'var(--gold)' : 'var(--blue)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                ACADEMY
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  fontFamily: 'var(--font-ui)', fontWeight: active ? 700 : 500,
                  fontSize: '0.88rem', padding: '0.5rem 0.875rem',
                  borderRadius: '100px', transition: 'all 0.2s',
                  color: active
                    ? 'var(--blue)'
                    : isDark ? 'rgba(255,255,255,0.88)' : 'var(--text-mid)',
                  background: active ? 'rgba(27,79,216,0.08)' : 'transparent',
                  letterSpacing: '0.01em',
                }}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link to="/contact" className="btn-primary" style={{
              padding: '0.6rem 1.4rem', fontSize: '0.85rem',
            }}
              className="desktop-cta btn-primary">
              Enroll Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: isDark ? 'white' : 'var(--navy)',
                padding: '0.25rem', borderRadius: '8px',
                display: 'none',
              }}
              className="hamburger"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '500px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: 'rgba(255,253,247,0.98)',
          backdropFilter: 'blur(20px)',
        }}>
          <div style={{ padding: '0.75rem 1.5rem 1.5rem' }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  display: 'block', fontFamily: 'var(--font-ui)', fontWeight: active ? 700 : 500,
                  fontSize: '1rem', padding: '0.875rem 1rem',
                  borderRadius: '12px', margin: '0.2rem 0',
                  color: active ? 'var(--blue)' : 'var(--text-mid)',
                  background: active ? 'rgba(27,79,216,0.08)' : 'transparent',
                  transition: 'all 0.2s',
                }}>
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" style={{
              display: 'block', textAlign: 'center', marginTop: '0.75rem',
            }} className="btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
