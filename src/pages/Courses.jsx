// COURSES PAGE
import React, { useState } from 'react';
import { CourseCard } from '../components/Cards';
import { courses } from '../data';
import { Filter } from 'lucide-react';

const categories = ['All', 'Primary (1–5)', 'Middle (6–8)', 'Secondary (9–10)', 'Senior (11–12)', 'JEE & NEET'];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? courses : courses.filter(c => {
    if (activeFilter === 'Primary (1–5)') return c.id === 1;
    if (activeFilter === 'Middle (6–8)') return c.id === 2;
    if (activeFilter === 'Secondary (9–10)') return c.id === 3;
    if (activeFilter === 'Senior (11–12)') return c.id === 4 || c.id === 5;
    if (activeFilter === 'JEE & NEET') return c.id === 6;
    return true;
  });

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy), #0d2050)',
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Programs</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            All Course Offerings
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
            Comprehensive coaching from Standard 1 through JEE & NEET, in English and Gujarati medium, for CBSE and GSEB boards.
          </p>
        </div>
      </section>

      {/* Info Badges */}
      <section style={{ background: 'var(--ivory)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {[
              { icon: '🏫', text: 'CBSE & GSEB Boards' },
              { icon: '🌐', text: 'English & Gujarati Medium' },
              { icon: '👨‍🎓', text: 'Std 1 to 12 + JEE/NEET' },
              { icon: '📅', text: 'Batches Starting Monthly' },
              { icon: '🎯', text: 'Limited Batch Sizes' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'white', border: '1px solid var(--border)',
                borderRadius: '100px', padding: '0.5rem 1.25rem',
                fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--text-dark)',
              }}>
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: 'var(--cream)', padding: '2.5rem 0 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', marginRight: '0.5rem' }}>
              <Filter size={15} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Filter:
              </span>
            </div>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.82rem',
                padding: '0.45rem 1.1rem', borderRadius: '100px',
                border: '2px solid',
                borderColor: activeFilter === cat ? 'var(--blue)' : 'var(--border)',
                background: activeFilter === cat ? 'var(--blue)' : 'white',
                color: activeFilter === cat ? 'white' : 'var(--text-muted)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section style={{ background: 'var(--cream)', padding: '3rem 0 6rem' }}>
        <div className="container">
          {/* Section breaks by level */}
          {activeFilter === 'All' ? (
            <>
              <SectionGroup title="School Programs (Std 1–10)" courses={courses.slice(0, 3)} />
              <SectionGroup title="Senior Secondary (Std 11–12)" courses={courses.slice(3, 5)} />
              <SectionGroup title="Competitive Exams" courses={[courses[5]]} />
            </>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', paddingTop: '2rem' }}>
              {filtered.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </div>
      </section>

      {/* Admission Process */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Simple Process</div>
            <h2 className="display-md" style={{ color: 'var(--navy)' }}>How to Enroll</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Inquire', desc: 'Call, WhatsApp, or visit us to learn about courses and batches.', icon: '📞' },
              { step: '02', title: 'Counseling', desc: 'Free academic counseling session to assess the right course for your child.', icon: '🗣️' },
              { step: '03', title: 'Assessment', desc: 'Brief placement test to assign the most suitable batch level.', icon: '📝' },
              { step: '04', title: 'Enroll', desc: 'Complete the enrollment form, pay fees, and begin your journey!', icon: '🎓' },
            ].map(({ step, title, desc, icon }, i) => (
              <div key={step} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem', textAlign: 'center',
                border: '1px solid var(--border)', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--blue)', color: 'white',
                  fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: '0.78rem',
                  padding: '0.25rem 0.75rem', borderRadius: '100px', letterSpacing: '0.05em',
                }}>
                  Step {step}
                </div>
                <div style={{ fontSize: '2.25rem', margin: '0.5rem 0 1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionGroup({ title, courses }) {
  return (
    <div style={{ marginBottom: '3rem', paddingTop: '2.5rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700,
        color: 'var(--navy)', marginBottom: '1.5rem',
        paddingBottom: '0.75rem', borderBottom: '2px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <span style={{ width: '5px', height: '24px', background: 'var(--gold)', borderRadius: '3px', display: 'inline-block' }} />
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  );
}
