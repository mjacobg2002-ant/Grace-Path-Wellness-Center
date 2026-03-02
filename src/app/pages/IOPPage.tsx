import { Link } from 'react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { AnimatedSection } from '../components/AnimatedSection';

const iopImg =
  'https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZWRpY2FsJTIwY2xpbmljJTIwd2FpdGluZyUyMHJvb20lMjBjbGVhbnxlbnwxfHx8fDE3NzIyODk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1920';

const schedule = [
  { day: 'Mon', morning: 'Group Therapy', afternoon: 'Skills Workshop' },
  { day: 'Tue', morning: 'Individual Session', afternoon: 'Psychoeducation' },
  { day: 'Wed', morning: 'Group Therapy', afternoon: 'Relapse Prevention' },
  { day: 'Thu', morning: 'Group Therapy', afternoon: 'Case Management' },
  { day: 'Fri', morning: 'Process Group', afternoon: 'Weekly Review' },
];

const benefits = [
  'Step-down from inpatient or residential levels of care',
  'Court-ordered treatment compliance',
  'Dual diagnosis and co-occurring mental health conditions',
  'Professionals requiring flexible, confidential programming',
  'Adults with recurring substance use despite prior outpatient treatment',
  'Individuals motivated for structured accountability',
];

export function IOPPage() {
  return (
    <PageTransition>
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: '96px',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${iopImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.28) saturate(0.5)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(31,42,55,0.85) 0%, rgba(31,42,55,0.2) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6rem 2rem 5rem',
            width: '100%',
          }}
        >
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
            Clinical Programs
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 400,
              color: '#F6F3EF',
              lineHeight: 1.1,
              maxWidth: '700px',
            }}
          >
            Intensive Outpatient Program
          </h1>
        </div>
      </section>

      {/* Overview */}
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
                Program Overview
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                  lineHeight: 1.2,
                  marginBottom: '2rem',
                }}
              >
                A Structured Framework for Sustained Recovery
              </h2>
              <div style={{ width: '48px', height: '1px', backgroundColor: '#7C8C7A', marginBottom: '2rem' }} />
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
                The Grace Path Intensive Outpatient Program (IOP) is a clinically rigorous, structured treatment model
                designed for adults who require more support than traditional weekly outpatient therapy provides —
                without the constraints of a residential setting.
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
                Clients participate 3–5 days per week in structured therapeutic sessions that combine
                group therapy, individual counseling, skill-building curricula, and psychoeducation.
                All programming is supervised by licensed clinical staff.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#3D4E5E',
                  lineHeight: 1.85,
                }}
              >
                Our IOP model is built for dual-diagnosis clients, incorporating evidence-based
                modalities including CBT, DBT skills integration, and motivational interviewing
                within a consistent group environment that fosters accountability and peer support.
              </p>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: '#EDE9E3',
                  border: '1px solid #D8CFC4',
                  borderRadius: '8px',
                  padding: '2.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: '#7C8C7A',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                  }}
                >
                  Program Details
                </div>
                {[
                  { label: 'Frequency', value: '3–5 days per week' },
                  { label: 'Session Length', value: '3 hours per session' },
                  { label: 'Format', value: 'Group + Individual' },
                  { label: 'Duration', value: '8–12 weeks (individualized)' },
                  { label: 'Setting', value: 'In-Person, Northern Virginia' },
                  { label: 'Diagnosis', value: 'Dual-Diagnosis Capable' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: i < 5 ? '1px solid #D8CFC4' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.78rem',
                        fontWeight: 400,
                        color: '#7C8C7A',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 400,
                        color: '#1F2A37',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section style={{ backgroundColor: '#EDE9E3', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
              Sample Schedule
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 400,
                color: '#1F2A37',
              }}
            >
              Weekly Program Structure
            </h2>
          </div>

          <div
            style={{
              border: '1px solid #D8CFC4',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#F6F3EF',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr 1fr',
                backgroundColor: '#1F2A37',
                padding: '12px 24px',
              }}
            >
              {['Day', 'Morning Session', 'Afternoon Session'].map((h, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    color: 'rgba(246,243,239,0.7)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {schedule.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 1fr',
                  padding: '18px 24px',
                  borderTop: '1px solid #D8CFC4',
                  backgroundColor: i % 2 === 0 ? '#F6F3EF' : '#FAF8F5',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#7C8C7A',
                    letterSpacing: '0.08em',
                  }}
                >
                  {row.day}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: 300,
                    color: '#1F2A37',
                  }}
                >
                  {row.morning}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: 300,
                    color: '#1F2A37',
                  }}
                >
                  {row.afternoon}
                </div>
              </div>
            ))}
            <div
              style={{
                padding: '14px 24px',
                backgroundColor: 'rgba(124,140,122,0.08)',
                borderTop: '1px solid #D8CFC4',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#7C8C7A',
                  fontStyle: 'italic',
                }}
              >
                * Schedule is individualized to each client's treatment plan. Above represents a standard
                full IOP week. Step-down schedules (3 days/week) available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
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
                Candidate Profile
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                  lineHeight: 1.2,
                  marginBottom: '2rem',
                }}
              >
                Who Benefits From IOP?
              </h2>
              <div style={{ width: '48px', height: '1px', backgroundColor: '#7C8C7A', marginBottom: '2rem' }} />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#3D4E5E',
                  lineHeight: 1.85,
                }}
              >
                The Intensive Outpatient Program is appropriate for adults who can maintain safety
                in a community setting but whose condition warrants more intensive clinical intervention
                than traditional outpatient therapy can provide.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle
                    size={16}
                    strokeWidth={1.5}
                    style={{ color: '#7C8C7A', marginTop: '3px', flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.88rem',
                      fontWeight: 300,
                      color: '#1F2A37',
                      lineHeight: 1.65,
                    }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section style={{ backgroundColor: '#1F2A37', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: '#F6F3EF',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}
              >
                Insurance & Medicaid Accepted
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: 'rgba(246,243,239,0.6)',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                }}
              >
                We work with most major commercial insurance plans, Medicaid, and offer self-pay options.
                Our admissions team will verify your benefits before your first appointment.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/admissions"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#1F2A37',
                  backgroundColor: '#F6F3EF',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                Verify Insurance
              </Link>
              <Link
                to="/contact"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  color: '#F6F3EF',
                  backgroundColor: 'transparent',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(246,243,239,0.2)',
                  display: 'inline-block',
                }}
              >
                Call Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}