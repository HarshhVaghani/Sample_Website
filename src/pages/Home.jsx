// ============================================
// HOME PAGE — Premium Hero + Sections
// ============================================
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy, Star, ChevronRight, Sparkles, Target, GraduationCap, FlaskConical } from 'lucide-react';
import { courses, testimonials, stats } from '../data';
import { CourseCard, TestimonialCard } from '../components/Cards';

// Animated counter
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target.replace(/\D/g, ''));
        const step = Math.ceil(num / 60);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, num);
          setCount(current);
          if (current >= num) clearInterval(timer);
        }, 25);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{target.includes('+') ? '+' : target.includes('%') ? '%' : ''}</span>;
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A1628 0%, #0d1f42 40%, #122040 70%, #0e2a5c 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* Large circle */}
          <div style={{
            position: 'absolute', top: '-15%', right: '-10%',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,79,216,0.2) 0%, transparent 70%)',
          }} />
          {/* Gold ring */}
          <div style={{
            position: 'absolute', bottom: '5%', left: '-5%',
            width: '500px', height: '500px', borderRadius: '50%',
            border: '1px solid rgba(245,197,24,0.08)',
          }} />
          <div style={{
            position: 'absolute', bottom: '8%', left: '-2%',
            width: '400px', height: '400px', borderRadius: '50%',
            border: '1px solid rgba(245,197,24,0.05)',
          }} />
          {/* Geometric dots */}
          <div style={{
            position: 'absolute', top: '15%', left: '5%',
            display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '18px',
          }}>
            {[...Array(48)].map((_, i) => (
              <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(245,197,24,0.15)' }} />
            ))}
          </div>
          {/* Floating gradient blobs */}
          <div style={{
            position: 'absolute', top: '30%', right: '15%',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* LEFT: Text */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.25)',
                borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem',
              }}>
                <Sparkles size={14} color="#F5C518" />
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', fontWeight: 700, color: '#F5C518', letterSpacing: '0.08em' }}>
                  ADMISSIONS OPEN 2024–25
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: 'white', lineHeight: 1.1, marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}>
                Building<br />
                <span style={{
                  background: 'linear-gradient(90deg, #F5C518, #FFD700, #F5C518)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s linear infinite',
                }}>
                  Bright Futures
                </span>
                <br />One Student<br />at a Time.
              </h1>

              <p style={{
                fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '480px',
              }}>
                From Standard 1 to JEE & NEET — expert coaching in English & Gujarati medium for CBSE & GSEB boards. Where potential meets excellence.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
                  Enroll Now <ArrowRight size={16} />
                </Link>
                <Link to="/courses" className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
                  Explore Courses
                </Link>
              </div>

              {/* Quick Facts */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[
                  { num: '2500+', label: 'Students' },
                  { num: '14+', label: 'Years' },
                  { num: '150+', label: 'JEE/NEET' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                      {num}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-ui)', marginTop: '0.2rem', letterSpacing: '0.04em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Visual Card Stack */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Main Card */}
              <div style={{
                background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-xl)', padding: '2.5rem',
                width: '100%', maxWidth: '420px',
                boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
                animation: 'float 5s ease-in-out infinite',
              }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Programs Offered
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>
                    Complete Academic Journey
                  </h3>
                </div>

                {[
                  { icon: <BookOpen size={18} />, label: 'Std 1–10', detail: 'Foundation & Board Prep', color: '#3B82F6' },
                  { icon: <FlaskConical size={18} />, label: 'Std 11–12', detail: 'Science & Commerce', color: '#10B981' },
                  { icon: <Target size={18} />, label: 'JEE & NEET', detail: 'Competitive Exam Mastery', color: '#F5C518' },
                  { icon: <GraduationCap size={18} />, label: 'English & Gujarati', detail: 'CBSE & GSEB Boards', color: '#F472B6' },
                ].map(({ icon, label, detail, color }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '0.875rem', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    marginBottom: '0.6rem', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: color, flexShrink: 0,
                    }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'white', fontSize: '0.88rem' }}>{label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{detail}</div>
                    </div>
                    <ChevronRight size={14} color="rgba(255,255,255,0.3)" style={{ marginLeft: 'auto' }} />
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute', top: '-1rem', right: '-1rem',
                background: 'var(--gold)', borderRadius: '16px',
                padding: '0.75rem 1.25rem',
                boxShadow: 'var(--shadow-gold)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--navy)', lineHeight: 1 }}>
                  98%
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--navy-mid)', letterSpacing: '0.05em' }}>
                  SUCCESS RATE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#FFFDF7" />
          </svg>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-right { display: none !important; }
          }
        `}</style>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section style={{ background: 'var(--ivory)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 900, color: 'var(--blue)', lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  <Counter target={number} />
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US HIGHLIGHTS ===== */}
      <section style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 className="display-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
              The Study Point Difference
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
              More than a coaching center — a launchpad for your child's brightest future.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: '🏆', title: 'Expert Faculty',
                desc: 'Handpicked teachers with 8–15 years of experience, specialized in competitive and board exams.',
                color: '#1B4FD8',
              },
              {
                icon: '📊', title: 'Result-Oriented',
                desc: 'Structured curriculum, weekly tests, and performance tracking ensure students excel consistently.',
                color: '#E11D48',
              },
              {
                icon: '🌐', title: 'Bilingual Teaching',
                desc: 'Classes available in English and Gujarati medium for both CBSE and GSEB boards.',
                color: '#16A34A',
              },
              {
                icon: '🎯', title: 'Small Batches',
                desc: 'Limited seats per batch ensure personalized attention and individual growth for every student.',
                color: '#9333EA',
              },
              {
                icon: '📱', title: 'Digital Resources',
                desc: 'Supplementary videos, study notes, and practice materials accessible anytime, anywhere.',
                color: '#D97706',
              },
              {
                icon: '👨‍👩‍👧', title: 'Parent Connect',
                desc: 'Regular progress reports and parent-teacher meetings keep families informed and involved.',
                color: '#0891B2',
              },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                padding: '2rem', boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: '0.6rem' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES PREVIEW ===== */}
      <section style={{ background: 'var(--ivory)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="section-label">Our Programs</div>
              <h2 className="display-md" style={{ color: 'var(--navy)' }}>
                Course Offerings
              </h2>
            </div>
            <Link to="/courses" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--blue)', fontSize: '0.9rem',
            }}>
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {courses.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section style={{ background: 'var(--cream)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Student Stories</div>
            <h2 className="display-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
              What Our Students Say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {testimonials.slice(0, 3).map(t => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/testimonials" className="btn-outline">
              Read All Reviews <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a6e 100%)',
        padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,79,216,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="label" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Start Your Journey</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 800, color: 'white', marginBottom: '1.25rem',
          }}>
            Your Child's Success Starts Here
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Join thousands of students who've transformed their academic future with Study Point Academy.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
              Enroll Now <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
