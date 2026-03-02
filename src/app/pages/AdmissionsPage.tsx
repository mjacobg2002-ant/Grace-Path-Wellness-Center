import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';
import { Shield, ExternalLink, ClipboardCheck, Phone, FileCheck, UserCheck, CreditCard, Clock } from 'lucide-react';

// Replace this URL with the actual HIPAA-secured admissions/intake form URL
const EXTERNAL_ADMISSIONS_URL = '#';

export function AdmissionsPage() {
  return (
    <PageTransition>
      <div style={{ paddingTop: '96px' }}>
        {/* Page Header */}
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
                Getting Started
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
                Admissions & Insurance Verification
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
                Begin your confidential intake process through our HIPAA-compliant admissions
                portal. All personal health information is collected and stored on a secured platform.
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
              {/* Left — Admissions Portal Access */}
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
                    Begin Your Intake
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
                    Start Your Confidential Consultation
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
                    Our admissions and insurance verification forms are hosted on a HIPAA-secured
                    platform to ensure the highest level of protection for your personal health
                    information. Clicking the button below will redirect you to our secure intake portal.
                  </p>
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
                    The intake form will collect basic contact information, insurance details, and a
                    brief description of your primary concern. All information is confidential and does
                    not constitute enrollment or financial obligation.
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
                    If you prefer to speak with someone directly, our admissions team is available
                    by phone Monday through Friday.
                  </p>

                  {/* Launch Admissions Button */}
                  <a
                    href={EXTERNAL_ADMISSIONS_URL}
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
                    <ClipboardCheck size={15} strokeWidth={2} />
                    Begin Intake Process
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
                      256-bit SSL encrypted. HIPAA & 42 CFR Part 2 compliant. Your inquiry is completely confidential.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right — Info Cards */}
              <AnimatedSection delay={0.15} direction="left">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* What to Expect */}
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
                      What to Expect at Intake
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
                      The First 48 Hours
                    </h3>
                    {[
                      { icon: <FileCheck size={16} strokeWidth={1.5} />, text: 'Complete the secure intake form with basic contact & insurance info' },
                      { icon: <Phone size={16} strokeWidth={1.5} />, text: 'Brief phone screening with an intake coordinator (15–20 min)' },
                      { icon: <CreditCard size={16} strokeWidth={1.5} />, text: 'Insurance benefits verified before your first visit' },
                      { icon: <UserCheck size={16} strokeWidth={1.5} />, text: 'Clinical assessment with a licensed counselor' },
                      { icon: <Clock size={16} strokeWidth={1.5} />, text: 'Level-of-care recommendation and program scheduling' },
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

                  {/* Self-Pay & Financial */}
                  <div
                    style={{
                      backgroundColor: '#F6F3EF',
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
                      Self-Pay & Financial Options
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.84rem',
                        fontWeight: 300,
                        color: '#3D4E5E',
                        lineHeight: 1.75,
                        marginBottom: '1rem',
                      }}
                    >
                      Grace Path offers transparent self-pay rates for clients without insurance coverage.
                      Sliding-scale options may be available based on financial need. Medicaid is accepted.
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 300,
                        color: '#7C8C7A',
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      Contact our admissions team at (703) 555-0100 to discuss financial arrangements
                      before your intake appointment.
                    </p>
                  </div>

                  {/* Confidentiality */}
                  <div
                    style={{
                      backgroundColor: '#1F2A37',
                      borderRadius: '8px',
                      padding: '2.25rem',
                    }}
                  >
                    <Shield
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
                      Confidentiality Statement
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
                      All treatment information is protected under HIPAA and 42 CFR Part 2. We do not
                      share clinical information without written consent. Your identity and treatment
                      details will never be disclosed without your explicit authorization.
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
