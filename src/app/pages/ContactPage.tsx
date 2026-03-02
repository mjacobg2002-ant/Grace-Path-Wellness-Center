import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { PageTransition } from '../components/PageTransition';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #D8CFC4',
    borderRadius: '6px',
    backgroundColor: '#FAF8F5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 300,
    color: '#1F2A37',
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.72rem',
    fontWeight: 500,
    color: '#5A6A78',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '6px',
  };

  return (
    <PageTransition>
      <div style={{ paddingTop: '96px' }}>
        {/* Header */}
        <section style={{ backgroundColor: '#1F2A37', padding: '5rem 2rem 4rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 500,
                color: '#7C8C7A',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Reach Us
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 400,
                color: '#F6F3EF',
                lineHeight: 1.1,
                maxWidth: '500px',
              }}
            >
              Contact Grace Path
            </h1>
          </div>
        </section>

        {/* Contact Grid */}
        <section style={{ backgroundColor: '#F6F3EF', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '5rem',
                alignItems: 'start',
              }}
            >
              {/* Contact Form */}
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: '#7C8C7A',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}
                >
                  Send a Message
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    fontWeight: 400,
                    color: '#1F2A37',
                    marginBottom: '2rem',
                  }}
                >
                  Secure Contact Form
                </h2>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: 'rgba(124,140,122,0.1)',
                      border: '1px solid rgba(124,140,122,0.3)',
                      borderRadius: '8px',
                      padding: '2.5rem',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle size={32} strokeWidth={1.5} style={{ color: '#7C8C7A', marginBottom: '1rem' }} />
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: '#1F2A37',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Message Received
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.88rem',
                        fontWeight: 300,
                        color: '#5A6A78',
                        lineHeight: 1.75,
                      }}
                    >
                      A member of our team will respond within one business day.
                      For urgent clinical needs, please call (703) 555-0100 directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Your Name *</label>
                        <input style={inputStyle} name="name" value={formData.name} onChange={handleChange} required placeholder="Full name"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone</label>
                        <input style={inputStyle} name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(703) 000-0000"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input style={inputStyle} name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reason for Contact</label>
                      <select style={{ ...inputStyle, appearance: 'none' }} name="subject" value={formData.subject} onChange={handleChange}>
                        <option value="">Select a topic</option>
                        <option>Admissions / Intake</option>
                        <option>Insurance Verification</option>
                        <option>Professional Referral</option>
                        <option>General Inquiry</option>
                        <option>Billing / Payments</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea
                        style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' } as React.CSSProperties}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we assist you?"
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#1F2A37',
                        color: '#F6F3EF',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '15px 24px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d3d4f')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1F2A37')}
                    >
                      Send Message
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Shield size={13} strokeWidth={1.5} style={{ color: '#7C8C7A' }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: '#7C8C7A', lineHeight: 1.6 }}>
                        All messages are transmitted securely and protected under HIPAA.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Info Cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}
                >
                  {[
                    {
                      icon: <Phone size={18} strokeWidth={1.5} />,
                      label: 'Admissions Line',
                      value: '(703) 555-0100',
                      sub: 'Available 7 days a week',
                    },
                    {
                      icon: <Mail size={18} strokeWidth={1.5} />,
                      label: 'Email',
                      value: 'intake@gracepathwellness.com',
                      sub: 'Secure & confidential',
                    },
                    {
                      icon: <MapPin size={18} strokeWidth={1.5} />,
                      label: 'Location',
                      value: 'Northern Virginia',
                      sub: 'Fairfax & Prince William Counties',
                    },
                    {
                      icon: <Clock size={18} strokeWidth={1.5} />,
                      label: 'Office Hours',
                      value: 'Mon–Sat: 8am–6pm',
                      sub: 'Sun: On-call intake only',
                    },
                  ].map((info, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#EDE9E3',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        border: '1px solid #D8CFC4',
                      }}
                    >
                      <div style={{ color: '#7C8C7A', marginBottom: '0.75rem' }}>{info.icon}</div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.65rem',
                          fontWeight: 500,
                          color: '#7C8C7A',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.82rem',
                          fontWeight: 400,
                          color: '#1F2A37',
                          marginBottom: '2px',
                          wordBreak: 'break-word',
                        }}
                      >
                        {info.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.72rem',
                          fontWeight: 300,
                          color: '#7C8C7A',
                        }}
                      >
                        {info.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #D8CFC4',
                    height: '240px',
                    backgroundColor: '#EDE9E3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <MapPin size={28} strokeWidth={1} style={{ color: '#7C8C7A' }} />
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 300,
                      color: '#7C8C7A',
                      textAlign: 'center',
                      padding: '0 2rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Interactive map will be embedded here.<br />
                    <span style={{ fontSize: '0.72rem', color: '#9A9088' }}>
                      Northern Virginia — Fairfax & Prince William Counties
                    </span>
                  </div>
                </div>

                {/* Directions */}
                <div
                  style={{
                    backgroundColor: '#EDE9E3',
                    borderRadius: '8px',
                    padding: '1.75rem',
                    border: '1px solid #D8CFC4',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: '#7C8C7A',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Directions
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: '#3D4E5E',
                      lineHeight: 1.7,
                    }}
                  >
                    Conveniently located in Fairfax County with accessibility via I-66, I-495,
                    and Route 28 corridors. Free parking available on-site. Public transit
                    options available from Vienna/Fairfax GMU Metro Station.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Fixed Call Button */}
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: '#1F2A37',
            padding: '12px 24px',
            borderTop: '1px solid rgba(246,243,239,0.1)',
          }}
        >
          <a
            href="tel:+17035550100"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 500,
              color: '#F6F3EF',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            <Phone size={16} strokeWidth={2} />
            Call Admissions — (703) 555-0100
          </a>
        </div>
      </div>
    </PageTransition>
  );
}