// TESTIMONIALS PAGE
import React, { useState } from 'react';
import { testimonials } from '../data';
import { TestimonialCard } from '../components/Cards';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? testimonials : testimonials.filter(t => t.type === filter);

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy), #0d2050)',
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(27,79,216,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Reviews</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Student & Parent Stories
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
            Real results from real families. See what our students and their parents say about the Study Point experience.
          </p>

          {/* Rating Summary */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            background: 'rgba(255,255,255,0.08)', borderRadius: '100px',
            padding: '0.75rem 2rem', marginTop: '2rem',
            border: '1px solid rgba(255,255,255,0.12)',
          }}>
            <div style={{ display: 'flex', gap: '0.2rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#F5C518" color="#F5C518" />)}
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)' }}>5.0</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Average Rating · 6+ Reviews</span>
          </div>
        </div>
      </section>

      {/* Success Highlights */}
      <section style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: 'AIR 847', label: 'JEE Advanced 2023', color: '#1B4FD8' },
              { num: '645/720', label: 'NEET 2023 Score', color: '#E11D48' },
              { num: '97%', label: 'CBSE Std 10 Topper', color: '#16A34A' },
              { num: '94%', label: 'GSEB Std 12', color: '#9333EA' },
            ].map(({ num, label, color }) => (
              <div key={label} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                padding: '1.75rem', textAlign: 'center',
                border: `2px solid ${color}22`, boxShadow: `0 4px 20px ${color}10`,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 900, color: color, lineHeight: 1, marginBottom: '0.4rem' }}>
                  {num}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-ui)', fontWeight: 600 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Reviews */}
      <section style={{ background: 'var(--ivory)', padding: '5rem 0' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
              { key: 'all', label: 'All Reviews' },
              { key: 'student', label: '🎓 Students' },
              { key: 'parent', label: '👨‍👩‍👧 Parents' },
            ].map(({ key, label }) => (
              <button key={key} onClick={() => setFilter(key)} style={{
                fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.85rem',
                padding: '0.55rem 1.4rem', borderRadius: '100px',
                border: '2px solid',
                borderColor: filter === key ? 'var(--blue)' : 'var(--border)',
                background: filter === key ? 'var(--blue)' : 'white',
                color: filter === key ? 'white' : 'var(--text-muted)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
            Write Your Own Success Story
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
            Every one of these results started with a single step — enrolling at Study Point Academy.
          </p>
          <a href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Start Today
          </a>
        </div>
      </section>
    </div>
  );
}
