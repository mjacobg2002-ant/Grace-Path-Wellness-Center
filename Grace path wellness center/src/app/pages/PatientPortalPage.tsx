import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';
import { Lock, Shield, ExternalLink, Calendar, FileText, MessageSquare, ClipboardList, Phone } from 'lucide-react';

// Replace this URL with the actual HIPAA-secured patient portal URL
const EXTERNAL_PORTAL_URL = '#';

export function PatientPortalPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: '96px' }}>
        {/* Header */}
        <section style={{ backgroundColor: '#1F2A37', padding: '5rem 2rem 4rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <AnimatedSection>
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
                Secure Access
              </div>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  fontWeight: 400,
                  color: '#F6F3EF',
                  lineHeight: 1.1,
                  maxWidth: '600px',
                }}
              >
                Patient Portal
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(246,243,239,0.6)',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                  marginTop: '1.25rem',
                }}
              >
                Access your treatment information, appointments, and clinical documents
                through our HIPAA-compliant secure portal hosted on a protected platform.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content */}
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
              {/* Left — Portal Access */}
              <AnimatedSection>
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
                    Secure Login
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
                    Access Your Account
                  </h2>
                  <div
                    style={{ width: '48px', height: '1px', backgroundColor: '#7C8C7A', marginBottom: '2rem' }}
                  />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      color: '#3D4E5E',
                      lineHeight: 1.85,
                      marginBottom: '1.25rem',
                    }}
                  >
                    Our patient portal is hosted on a HIPAA-secured platform to ensure the highest
                    level of protection for your personal health information. Clicking the button below
                    will redirect you to our secure portal site.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      color: '#3D4E5E',
                      lineHeight: 1.85,
                      marginBottom: '2.5rem',
                    }}
                  >
                    Your login credentials were provided during your intake appointment.
                    If you have not received credentials or need assistance, please contact our
                    front desk directly.
                  </p>

                  {/* Launch Portal Button */}
                  <a
                    href={EXTERNAL_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: '#F6F3EF',
                      backgroundColor: '#2C3E50',
                      padding: '18px 36px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#354c63')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C3E50')}
                  >
                    <Lock size={15} strokeWidth={2} />
                    Launch Secure Portal
                    <ExternalLink size={13} strokeWidth={2} />
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1.5rem' }}>
                    <Shield size={13} strokeWidth={1.5} style={{ color: '#7C8C7A', flexShrink: 0 }} />
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 300,
                        color: '#7C8C7A',
                        lineHeight: 1.6,
                      }}
                    >
                      256-bit SSL encrypted. HIPAA & 42 CFR Part 2 compliant. Your data is never shared.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right — Info Cards */}
              <AnimatedSection delay={0.15} direction="left">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* What You Can Access */}
                  <div
                    style={{
                      backgroundColor: '#EDE9E3',
                      borderRadius: '8px',
                      padding: '2.25rem',
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
                        marginBottom: '1rem',
                      }}
                    >
                      Portal Features
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: '#1F2A37',
                        marginBottom: '1.5rem',
                        lineHeight: 1.3,
                      }}
                    >
                      What You Can Access
                    </h3>
                    {[
                      { icon: <Calendar size={16} strokeWidth={1.5} />, text: 'View & manage upcoming appointments' },
                      { icon: <FileText size={16} strokeWidth={1.5} />, text: 'Download treatment plans & documents' },
                      { icon: <ClipboardList size={16} strokeWidth={1.5} />, text: 'Track your treatment milestones' },
                      { icon: <MessageSquare size={16} strokeWidth={1.5} />, text: 'Secure messaging with your care team' },
                      { icon: <Shield size={16} strokeWidth={1.5} />, text: 'Insurance & billing information' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '12px',
                          marginBottom: '14px',
                          alignItems: 'flex-start',
                        }}
                      >
                        <div style={{ color: '#7C8C7A', marginTop: '2px', flexShrink: 0 }}>
                          {item.icon}
                        </div>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.84rem',
                            fontWeight: 300,
                            color: '#3D4E5E',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Need Help */}
                  <div
                    style={{
                      backgroundColor: '#1F2A37',
                      borderRadius: '8px',
                      padding: '2.25rem',
                    }}
                  >
                    <Lock
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: '#7C8C7A', marginBottom: '1rem' }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: '#F6F3EF',
                        marginBottom: '0.85rem',
                        lineHeight: 1.3,
                      }}
                    >
                      Need Help Logging In?
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 300,
                        color: 'rgba(246,243,239,0.6)',
                        lineHeight: 1.75,
                        marginBottom: '1.5rem',
                      }}
                    >
                      Portal credentials are provided during your intake appointment. If you
                      have not received login information or are having trouble accessing your
                      account, our front desk team can assist you.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={13} strokeWidth={1.5} style={{ color: '#7C8C7A' }} />
                        <a
                          href="tel:+17035550100"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.84rem',
                            fontWeight: 400,
                            color: '#A8C5A0',
                            textDecoration: 'none',
                          }}
                        >
                          (703) 555-0100
                        </a>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.72rem',
                          fontWeight: 300,
                          color: 'rgba(246,243,239,0.4)',
                          fontStyle: 'italic',
                        }}
                      >
                        Monday – Friday, 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
