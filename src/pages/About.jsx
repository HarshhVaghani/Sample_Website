// ABOUT PAGE
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Medal, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0d2050 100%)',
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,79,216,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>About Us</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 800, color: 'white', marginBottom: '1rem',
          }}>
            Our Story of Excellence
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
            Since 2010, Study Point Academy has been Ahmedabad's most trusted name in academic coaching — nurturing young minds, one batch at a time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Our Foundation</div>
              <h2 className="display-md" style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>
                Mission & Vision
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex', gap: '1rem', marginBottom: '1.5rem',
                  padding: '1.5rem', background: 'rgba(27,79,216,0.06)', borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--blue)',
                }}>
                  <div style={{ fontSize: '2rem' }}>🎯</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                      Our Mission
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      To deliver world-class academic coaching in both English and Gujarati medium, making quality education accessible to every student across CBSE and GSEB boards — from primary level through JEE and NEET.
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex', gap: '1rem',
                  padding: '1.5rem', background: 'rgba(245,197,24,0.06)', borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--gold)',
                }}>
                  <div style={{ fontSize: '2rem' }}>🌟</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                      Our Vision
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      To be Gujarat's most impactful coaching institution — where every student discovers their potential, builds unshakeable confidence, and achieves academic excellence that shapes their future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Large visual card */}
              <div style={{
                background: 'linear-gradient(135deg, var(--navy), #1a3a8f)',
                borderRadius: 'var(--radius-xl)', padding: '3rem',
                color: 'white',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--gold)' }}>
                  By the Numbers
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[
                    { num: '14+', label: 'Years of Excellence' },
                    { num: '2500+', label: 'Total Students' },
                    { num: '150+', label: 'JEE/NEET Cleared' },
                    { num: '98%', label: 'Above 80% in Boards' },
                    { num: '6', label: 'Expert Faculty' },
                    { num: '2', label: 'Boards Covered' },
                  ].map(({ num, label }) => (
                    <div key={label} style={{
                      background: 'rgba(255,255,255,0.07)', borderRadius: '12px',
                      padding: '1.25rem', textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold)' }}>{num}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.25rem', fontFamily: 'var(--font-ui)' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Study Point</div>
            <h2 className="display-md" style={{ color: 'var(--navy)' }}>
              What Sets Us Apart
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: <Medal size={24} />, color: '#1B4FD8', title: 'Proven Track Record',
                points: ['98% students score 80%+ in boards', '150+ JEE/NEET selections', 'Multiple school toppers every year', '14 years of consistent results'],
              },
              {
                icon: <BookOpen size={24} />, color: '#16A34A', title: 'Curriculum Excellence',
                points: ['NCERT aligned with depth', 'Concept-first teaching approach', 'Weekly assessments & mock tests', 'Comprehensive study materials'],
              },
              {
                icon: <Users size={24} />, color: '#9333EA', title: 'Student-First Approach',
                points: ['Batch sizes limited to 20 students', 'Doubt-clearing sessions twice weekly', 'Individual performance tracking', 'Mentorship beyond academics'],
              },
            ].map(({ icon, color, title, points }) => (
              <div key={title} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                padding: '2.5rem', boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: color, marginBottom: '1.5rem',
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                  {title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {points.map(p => (
                    <div key={p} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={15} color={color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 className="display-md" style={{ color: 'var(--navy)' }}>Key Milestones</h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {[
              { year: '2010', milestone: 'Founded by Mr. Rajesh Patel with a vision for quality coaching in Ahmedabad', color: '#1B4FD8' },
              { year: '2013', milestone: 'Expanded to JEE/NEET preparation; first batch produced 12 engineering seat holders', color: '#16A34A' },
              { year: '2016', milestone: 'Introduced Gujarati medium coaching; GSEB board results topped 90% average', color: '#9333EA' },
              { year: '2019', milestone: 'Crossed 1000 enrolled students milestone; opened Commerce stream coaching', color: '#D97706' },
              { year: '2022', milestone: 'Digital learning supplements launched; 50+ NEET qualifiers in a single year', color: '#E11D48' },
              { year: '2024', milestone: '14 years of excellence — 2500+ alumni, 150+ JEE/NEET selections, Gujarat\'s trusted name', color: '#F5C518' },
            ].map(({ year, milestone, color }, i) => (
              <div key={year} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', position: 'relative' }}>
                {/* Line */}
                {i < 5 && <div style={{
                  position: 'absolute', left: '19px', top: '40px',
                  width: '2px', height: 'calc(100% + 1rem)',
                  background: 'var(--border)',
                }} />}
                {/* Dot */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `${color}15`, border: `3px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color }} />
                </div>
                <div style={{
                  background: 'white', borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem', flex: 1,
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: color, fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                    {year}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{milestone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
            Become Part of Our Story
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Join thousands of students who found their path to success at Study Point Academy.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Get Started Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
