// Footer Component
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { contactInfo } from '../data';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.75)', paddingTop: '5rem' }}>
      {/* Top CTA Band */}
      <div style={{
        background: 'linear-gradient(135deg, var(--blue) 0%, #1a3a8f 100%)',
        padding: '3rem 0', marginBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(245,197,24,0.08)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="label" style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>
            Admissions Open 2024–25
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700, color: 'white', marginBottom: '1.5rem',
          }}>
            Ready to Build a Brighter Future?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Enroll Today</Link>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer"
              className="btn-secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--blue), #0A1628)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid rgba(245,197,24,0.3)',
              }}>
                <GraduationCap size={22} color="#F5C518" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'white' }}>
                  STUDY POINT
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  ACADEMY
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Empowering students from Std 1 to JEE/NEET with expert faculty, proven methods, and a culture of excellence since 2010.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: Instagram, link: '#' },
                { Icon: Youtube, link: '#' },
                { Icon: Facebook, link: '#' },
              ].map(({ Icon, link }, i) => (
                <a key={i} href={link} style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', color: 'rgba(255,255,255,0.7)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Quick Links
            </div>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/courses', label: 'Our Courses' },
              { to: '/team', label: 'Our Team' },
              { to: '/testimonials', label: 'Student Results' },
              { to: '/contact', label: 'Contact Us' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{
                display: 'block', padding: '0.35rem 0',
                fontSize: '0.88rem', transition: 'color 0.2s',
                color: 'rgba(255,255,255,0.65)',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                → {label}
              </Link>
            ))}
          </div>

          {/* Courses */}
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Our Programs
            </div>
            {[
              'Standards 1 – 5 (Foundation)',
              'Standards 6 – 8 (Middle)',
              'Standards 9 – 10 (Board Prep)',
              'Std 11–12 Science',
              'Std 11–12 Commerce',
              'JEE Mains & Advanced',
              'NEET Preparation',
            ].map(c => (
              <div key={c} style={{
                display: 'block', padding: '0.35rem 0',
                fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)',
              }}>
                • {c}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { Icon: MapPin, text: contactInfo.address },
                { Icon: Phone, text: contactInfo.phone },
                { Icon: Mail, text: contactInfo.email },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'rgba(245,197,24,0.12)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={15} color="var(--gold)" />
                  </div>
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.7)' }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
            © 2024 Study Point Academy. All rights reserved.
          </div>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
            English • Gujarati Medium | CBSE • GSEB Board
          </div>
        </div>
      </div>
    </footer>
  );
}
