// TEAM PAGE
import React from 'react';
import { teachers } from '../data';
import { TeacherCard } from '../components/Cards';
import { Award, Users, BookOpen } from 'lucide-react';

export default function Team() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy), #122040)',
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Faculty</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Meet Our Expert Faculty
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
            A team of passionate educators with decades of combined experience, dedicated to bringing out the best in every student.
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section style={{ background: 'var(--cream)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {[
              { icon: <Users size={20} color="var(--blue)" />, label: '6 Expert Teachers' },
              { icon: <Award size={20} color="var(--gold-deep)" />, label: 'Avg 11 Years Experience' },
              { icon: <BookOpen size={20} color="#16A34A" />, label: 'Specialist in Every Subject' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'white', padding: '1rem 1.75rem',
                borderRadius: '100px', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {icon}
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', fontSize: '0.9rem' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ background: 'var(--ivory)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {teachers.map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)}
          </div>
        </div>
      </section>

      {/* Join Us Banner */}
      <section style={{ background: 'var(--cream)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--navy), #1a3a8f)',
            borderRadius: 'var(--radius-xl)', padding: '3.5rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(27,79,216,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👩‍🏫</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
                Passionate About Teaching?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '450px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
                We're always looking for talented, experienced educators who share our commitment to student success. Join the Study Point family.
              </p>
              <a href="mailto:careers@studypointacademy.in" className="btn-primary">
                Apply to Teach
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
