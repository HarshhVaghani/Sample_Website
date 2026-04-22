// CONTACT PAGE
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { contactInfo } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Please write a short message';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy), #0d2050)',
        padding: '5rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Contact Us</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Let's Connect
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto', fontSize: '1.05rem' }}>
            Ready to enroll, or just have questions? Our team is here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { Icon: Phone, color: '#1B4FD8', title: 'Call Us', lines: [contactInfo.phone, 'Mon–Sat, 9am–8pm'] },
              { Icon: Mail, color: '#16A34A', title: 'Email Us', lines: [contactInfo.email, 'We reply within 24 hours'] },
              { Icon: MapPin, color: '#E11D48', title: 'Visit Us', lines: ['Satellite Road, Ahmedabad', 'Gujarat — 380015'] },
              { Icon: Clock, color: '#D97706', title: 'Office Hours', lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 2:00 PM'] },
            ].map(({ Icon, color, title, lines }) => (
              <div key={title} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                padding: '1.75rem', boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, marginBottom: '1rem',
                }}>
                  <Icon size={22} />
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{title}</div>
                {lines.map((l, i) => (
                  <div key={i} style={{ fontSize: '0.82rem', color: i === 0 ? 'var(--text-dark)' : 'var(--text-muted)', fontWeight: i === 0 ? 600 : 400 }}>
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section style={{ background: 'var(--ivory)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* FORM */}
            <div style={{
              background: 'white', borderRadius: 'var(--radius-xl)',
              padding: '2.5rem', boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: 'rgba(22,163,74,0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                  }}>
                    <CheckCircle size={36} color="#16A34A" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{form.name}</strong>! Our team will contact you within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', course: '', message: '' }); }}
                    className="btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
                    Fill in the form and we'll get back to you promptly.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <Field label="Full Name *" error={errors.name}>
                      <input className="input-field" name="name" placeholder="e.g. Aryan Sharma" value={form.name} onChange={handleChange} />
                    </Field>

                    <Field label="Mobile Number *" error={errors.phone}>
                      <input className="input-field" name="phone" placeholder="e.g. 9876543210" value={form.phone} onChange={handleChange} />
                    </Field>

                    <Field label="Email Address (Optional)" error={errors.email}>
                      <input className="input-field" name="email" placeholder="e.g. aryan@email.com" value={form.email} onChange={handleChange} />
                    </Field>

                    <Field label="Course of Interest" error={errors.course}>
                      <select className="input-field" name="course" value={form.course} onChange={handleChange} style={{ cursor: 'pointer' }}>
                        <option value="">Select a program...</option>
                        <option>Standards 1–5 (Primary)</option>
                        <option>Standards 6–8 (Middle)</option>
                        <option>Standards 9–10 (Board Prep)</option>
                        <option>Std 11–12 Science</option>
                        <option>Std 11–12 Commerce</option>
                        <option>JEE Mains & Advanced</option>
                        <option>NEET Preparation</option>
                      </select>
                    </Field>

                    <Field label="Your Message *" error={errors.message}>
                      <textarea className="input-field" name="message" placeholder="Tell us about your requirements..." rows={4}
                        value={form.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                    </Field>

                    <button onClick={handleSubmit} disabled={loading} style={{
                      background: 'var(--blue)', color: 'white',
                      padding: '1rem', borderRadius: '12px', width: '100%',
                      fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.95rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      transition: 'all 0.2s', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                      onMouseEnter={e => !loading && (e.currentTarget.style.background = '#1243b8')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'var(--blue)')}
                    >
                      {loading ? 'Sending...' : <><Send size={17} /> Send Message</>}
                    </button>

                    {/* WhatsApp Alt */}
                    <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      padding: '0.875rem', borderRadius: '12px', border: '2px solid #25D366',
                      color: '#25D366', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.9rem',
                      transition: 'all 0.2s', textDecoration: 'none',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#25D366'; }}
                    >
                      💬 Or Chat on WhatsApp
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* MAP + Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
                <iframe
                  title="Study Point Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.611439174568!2d72.50949!3d23.02579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84576c38f7f3%3A0x14c8a0ec7b06a8d9!2sSatellite%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="320" style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                  📍 Find Us Here
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {contactInfo.address}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={`tel:${contactInfo.phone}`} style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(27,79,216,0.08)', color: 'var(--blue)',
                    padding: '0.5rem 1rem', borderRadius: '100px',
                    fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    <Phone size={13} /> {contactInfo.phone}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(22,163,74,0.08)', color: '#16A34A',
                    padding: '0.5rem 1rem', borderRadius: '100px',
                    fontFamily: 'var(--font-ui)', fontSize: '0.82rem', fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    <Mail size={13} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'var(--font-ui)', fontWeight: 600,
        fontSize: '0.82rem', color: 'var(--text-dark)', marginBottom: '0.5rem',
        letterSpacing: '0.01em',
      }}>
        {label}
      </label>
      {children}
      {error && (
        <div style={{ color: '#E11D48', fontSize: '0.78rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          ⚠ {error}
        </div>
      )}
    </div>
  );
}
