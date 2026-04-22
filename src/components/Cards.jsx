// ============================================
// Reusable Card Components
// ============================================
import React from 'react';
import { Star, BookOpen, Globe, Award } from 'lucide-react';

// ---- COURSE CARD ----
export function CourseCard({ course }) {
  const { title, description, subjects, boards, mediums, color, accent, icon, badge, level } = course;
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 20px 50px ${accent}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Card Top */}
      <div style={{ background: color, padding: '2rem 1.75rem 1.5rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: accent, color: 'white', borderRadius: '100px',
          fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700,
          padding: '0.25rem 0.75rem', letterSpacing: '0.05em',
        }}>
          {badge}
        </div>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{icon}</div>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
          {level}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
          {title}
        </h3>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{description}</p>

        {/* Subjects */}
        <div>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Subjects
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {subjects.map(s => (
              <span key={s} style={{
                background: `${accent}12`, color: accent,
                borderRadius: '100px', padding: '0.2rem 0.65rem',
                fontSize: '0.75rem', fontFamily: 'var(--font-ui)', fontWeight: 600,
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Boards & Medium */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <Award size={13} color={accent} />
            <span>{boards.join(' • ')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <Globe size={13} color={accent} />
            <span>{mediums.join(' • ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- TEACHER CARD ----
export function TeacherCard({ teacher }) {
  const { name, subject, experience, qualification, specialization, avatar, color } = teacher;
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--radius-lg)',
      padding: '2rem 1.5rem', textAlign: 'center',
      boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)',
      transition: 'all 0.3s ease', overflow: 'hidden', position: 'relative',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 20px 50px ${color}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Decorative top stripe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
      }} />

      {/* Avatar */}
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1rem',
        fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700,
        color: 'white', letterSpacing: '0.02em',
        boxShadow: `0 8px 24px ${color}33`,
      }}>
        {avatar}
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.3rem' }}>
        {name}
      </h3>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 600, color: color, marginBottom: '1rem' }}>
        {subject}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Experience:</span> {experience}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Qualification:</span> {qualification}
        </div>
        <div style={{
          marginTop: '0.5rem', background: `${color}12`, color: color,
          borderRadius: '100px', padding: '0.3rem 0.75rem',
          fontSize: '0.75rem', fontFamily: 'var(--font-ui)', fontWeight: 600,
        }}>
          🎯 {specialization}
        </div>
      </div>
    </div>
  );
}

// ---- TESTIMONIAL CARD ----
export function TestimonialCard({ testimonial }) {
  const { name, role, text, rating, type, course } = testimonial;
  return (
    <div style={{
      background: 'white', borderRadius: 'var(--radius-lg)',
      padding: '2rem', boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border)', transition: 'all 0.3s ease',
      display: 'flex', flexDirection: 'column', gap: '1.25rem',
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      {/* Quote mark */}
      <div style={{
        position: 'absolute', top: '-10px', right: '1.5rem',
        fontFamily: 'Georgia, serif', fontSize: '8rem', color: 'rgba(27,79,216,0.06)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>❝</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={15} fill="#F5C518" color="#F5C518" />
        ))}
      </div>

      <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic' }}>
        "{text}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', fontSize: '0.9rem' }}>
            {name}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
            {role}
          </div>
        </div>
        <div style={{
          background: type === 'student' ? 'rgba(27,79,216,0.1)' : 'rgba(245,197,24,0.15)',
          color: type === 'student' ? 'var(--blue)' : '#92400E',
          borderRadius: '100px', padding: '0.2rem 0.7rem',
          fontSize: '0.72rem', fontFamily: 'var(--font-ui)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.05em',
        }}>
          {type === 'student' ? '🎓 Student' : '👨‍👩‍👧 Parent'}
        </div>
      </div>
    </div>
  );
}
