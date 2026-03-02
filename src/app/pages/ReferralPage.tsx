import { useState } from 'react';
import { CheckCircle, Shield, Clock, Phone, Mail, Printer } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function ReferralPage() {
  const [formData, setFormData] = useState({
    referrerName: '',
    organization: '',
    referrerType: '',
    phone: '',
    fax: '',
    email: '',
    clientFirstName: '',
    clientLastName: '',
    clientDob: '',
    clientPhone: '',
    diagnosis: '',
    courtRef: '',
    urgency: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

  const audiences = [
    { title: 'Courts & Probation', desc: 'Court-ordered IOP and OP placement with compliance documentation and attendance reporting.' },
    { title: 'Criminal Defense Attorneys', desc: 'Pre-plea and post-conviction referrals. Documentation packages available for legal proceedings.' },
    { title: 'Hospitals & Emergency Departments', desc: 'Streamlined step-down coordination with clinical handoff and records transfer support.' },
    { title: 'Primary Care Providers', desc: 'Warm referral acceptance with shared clinical summaries and coordination of care.' },
    { title: 'EAPs & Occupational Health', desc: 'Confidential outpatient services for employees with discreet billing and reporting protocols.' },
    { title: 'DUI / ASAP Programs', desc: 'Authorized ASAP provider in Northern Virginia. Full compliance documentation provided.' },
  ];

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
              Professional Referrals
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 400,
                color: '#F6F3EF',
                lineHeight: 1.1,
                maxWidth: '640px',
              }}
            >
              Referral Partner Portal
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'rgba(246,243,239,0.6)',
                lineHeight: 1.8,
                maxWidth: '580px',
                marginTop: '1.25rem',
              }}
            >
              Grace Path partners with courts, hospitals, legal professionals, and healthcare
              providers to deliver reliable, clinically credentialed step-down and outpatient care.
              Intake turnaround: 24–48 business hours.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ backgroundColor: '#EDE9E3', padding: '2rem', borderBottom: '1px solid #D8CFC4' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3rem',
                justifyContent: 'center',
              }}
            >
              {[
                { icon: <Clock size={16} strokeWidth={1.5} />, label: 'Intake Turnaround', value: '24–48 Hours' },
                { icon: <Phone size={16} strokeWidth={1.5} />, label: 'Referral Line', value: '(703) 555-0110' },
                { icon: <Printer size={16} strokeWidth={1.5} />, label: 'Secure Fax', value: '(703) 555-0199' },
                { icon: <Mail size={16} strokeWidth={1.5} />, label: 'Clinical Coordination', value: 'referrals@gracepathwellness.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#7C8C7A' }}>{item.icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        color: '#7C8C7A',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.88rem',
                        fontWeight: 400,
                        color: '#1F2A37',
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section style={{ backgroundColor: '#F6F3EF', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3.5rem' }}>
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
                Who We Work With
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                }}
              >
                Trusted by Northern Virginia's<br />Professional Community
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {audiences.map((a, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#EDE9E3',
                    borderRadius: '8px',
                    padding: '2rem',
                    border: '1px solid rgba(216,207,196,0.5)',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(31,42,55,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      color: '#1F2A37',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {a.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: '#5A6A78',
                      lineHeight: 1.7,
                    }}
                  >
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Form */}
        <section style={{ backgroundColor: '#EDE9E3', padding: '7rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
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
                Submit a Referral
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                }}
              >
                Referral Submission Form
              </h2>
            </div>

            {submitted ? (
              <div
                style={{
                  backgroundColor: '#F6F3EF',
                  border: '1px solid rgba(124,140,122,0.3)',
                  borderRadius: '8px',
                  padding: '3rem',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={32} strokeWidth={1.5} style={{ color: '#7C8C7A', marginBottom: '1rem' }} />
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    color: '#1F2A37',
                    marginBottom: '0.75rem',
                  }}
                >
                  Referral Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: '#5A6A78',
                    lineHeight: 1.75,
                    maxWidth: '480px',
                    margin: '0 auto',
                  }}
                >
                  Our clinical team will contact your office within 24–48 business hours to confirm
                  receipt and initiate the intake process for your referred client.
                </p>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: '#F6F3EF',
                  borderRadius: '8px',
                  padding: '3rem',
                  border: '1px solid #D8CFC4',
                }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Referrer Section */}
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        color: '#7C8C7A',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '1.25rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid #D8CFC4',
                      }}
                    >
                      Referring Party Information
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Your Name *</label>
                        <input style={inputStyle} name="referrerName" value={formData.referrerName} onChange={handleChange} required placeholder="Full name"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Organization</label>
                        <input style={inputStyle} name="organization" value={formData.organization} onChange={handleChange} placeholder="Court, hospital, firm, etc."
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Referrer Type</label>
                        <select style={{ ...inputStyle, appearance: 'none' }} name="referrerType" value={formData.referrerType} onChange={handleChange}>
                          <option value="">Select type</option>
                          <option>Court / Probation Officer</option>
                          <option>Defense Attorney</option>
                          <option>Hospital / ED</option>
                          <option>Primary Care Provider</option>
                          <option>EAP / Occupational Health</option>
                          <option>ASAP Program</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Phone *</label>
                        <input style={inputStyle} name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="Direct line"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Fax</label>
                        <input style={inputStyle} name="fax" value={formData.fax} onChange={handleChange} placeholder="Fax number"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email</label>
                        <input style={inputStyle} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Professional email"
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                    </div>
                  </div>

                  {/* Client Section */}
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        color: '#7C8C7A',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '1.25rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid #D8CFC4',
                      }}
                    >
                      Client Information
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Client First Name *</label>
                        <input style={inputStyle} name="clientFirstName" value={formData.clientFirstName} onChange={handleChange} required
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Client Last Name *</label>
                        <input style={inputStyle} name="clientLastName" value={formData.clientLastName} onChange={handleChange} required
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Date of Birth</label>
                        <input style={inputStyle} name="clientDob" type="date" value={formData.clientDob} onChange={handleChange}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Client Phone</label>
                        <input style={inputStyle} name="clientPhone" type="tel" value={formData.clientPhone} onChange={handleChange}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')} />
                      </div>
                      <div>
                        <label style={labelStyle}>Primary Diagnosis / Concern</label>
                        <select style={{ ...inputStyle, appearance: 'none' }} name="diagnosis" value={formData.diagnosis} onChange={handleChange}>
                          <option value="">Select</option>
                          <option>Alcohol Use Disorder</option>
                          <option>Opioid Use Disorder</option>
                          <option>Stimulant Use Disorder</option>
                          <option>Polysubstance Use</option>
                          <option>Co-occurring MH / SUD</option>
                          <option>Court-Required Eval & Treatment</option>
                          <option>DUI</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Court Referral?</label>
                        <select style={{ ...inputStyle, appearance: 'none' }} name="courtRef" value={formData.courtRef} onChange={handleChange}>
                          <option value="">Select</option>
                          <option>Yes – Court-ordered</option>
                          <option>Yes – Probation condition</option>
                          <option>No – Voluntary</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', marginTop: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Urgency</label>
                        <select style={{ ...inputStyle, appearance: 'none' }} name="urgency" value={formData.urgency} onChange={handleChange}>
                          <option value="">Select</option>
                          <option>Routine (within 1 week)</option>
                          <option>Urgent (within 48 hours)</option>
                          <option>Emergency (same day)</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Clinical Notes / Context</label>
                        <textarea
                          style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' } as React.CSSProperties}
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Any relevant clinical context, court requirements, or scheduling constraints..."
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#7C8C7A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#D8CFC4')}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Shield size={13} strokeWidth={1.5} style={{ color: '#7C8C7A' }} />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.72rem',
                          fontWeight: 300,
                          color: '#7C8C7A',
                        }}
                      >
                        Transmitted securely. HIPAA compliant.
                      </span>
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
                        padding: '14px 28px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d3d4f')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1F2A37')}
                    >
                      Submit Referral
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Clinical Leadership */}
        <section style={{ backgroundColor: '#1F2A37', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3rem',
                alignItems: 'center',
              }}
            >
              <div>
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
                  Clinical Leadership
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                    fontWeight: 400,
                    color: '#F6F3EF',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                  }}
                >
                  A Team You Can Trust
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'rgba(246,243,239,0.6)',
                    lineHeight: 1.8,
                  }}
                >
                  Grace Path is led by licensed clinicians with backgrounds in addiction psychiatry,
                  clinical social work, and counseling psychology. Our clinical director is available
                  for direct coordination with referring professionals when clinically appropriate.
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {[
                  'Licensed clinical staff',
                  'DBHDS certified facility',
                  'ASAP authorized provider',
                  'Dual-diagnosis capable',
                  'Court documentation standard',
                  'Direct clinical liaison',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={14} strokeWidth={1.5} style={{ color: '#7C8C7A', flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 300,
                        color: 'rgba(246,243,239,0.7)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}