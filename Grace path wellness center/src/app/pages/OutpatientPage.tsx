import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const therapyImg =
  'https://images.unsplash.com/photo-1632230587069-71e426dbdeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMG1pbmltYWxpc3QlMjBpbnRlcmlvciUyMGxpZ2h0JTIwd2luZG93JTIwdGhlcmFweXxlbnwxfHx8fDE3NzIyODk2MjB8MA&ixlib=rb-4.1.0&q=80&w=1920';

const services = [
  {
    title: 'Individual Therapy',
    description:
      'One-on-one sessions with a licensed clinician addressing substance use, mental health, trauma, and behavioral patterns. Typically 1–2 sessions per week.',
  },
  {
    title: 'Group Therapy',
    description:
      'Structured therapeutic groups providing peer accountability, skill reinforcement, and community support in a professionally facilitated setting.',
  },
  {
    title: 'Co-Occurring Mental Health',
    description:
      'Integrated treatment for clients presenting with concurrent mood, anxiety, trauma, or personality disorders alongside substance use concerns.',
  },
  {
    title: 'Court-Ordered Treatment',
    description:
      'Structured outpatient programming meeting ASAP, court, and probation compliance requirements with regular reporting and documentation.',
  },
  {
    title: 'Long-Term Relapse Prevention',
    description:
      'Maintenance-phase therapy focused on sustainability, identifying triggers, managing high-risk situations, and building long-term recovery capital.',
  },
];

const continuum = [
  { label: 'Intensive Outpatient', abbr: 'IOP', href: '/iop', active: false },
  { label: 'Standard Outpatient', abbr: 'OP', href: '/outpatient', active: true },
  { label: 'Long-Term Recovery Support', abbr: 'LTRS', href: '/outpatient', active: false },
];

export function OutpatientPage() {
  return (
    <PageTransition>
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: '96px',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${therapyImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) saturate(0.5)',
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
              maxWidth: '600px',
            }}
          >
            Outpatient Behavioral Health Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
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
              Outpatient Services
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 400,
                color: '#1F2A37',
                lineHeight: 1.2,
                maxWidth: '540px',
              }}
            >
              Comprehensive Outpatient Clinical Services
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: i === 0 ? '#1F2A37' : '#EDE9E3',
                  borderRadius: '8px',
                  padding: '2.25rem',
                  border: '1px solid rgba(216,207,196,0.4)',
                  boxShadow: '0 2px 12px rgba(31,42,55,0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(31,42,55,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(31,42,55,0.05)';
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: i === 0 ? '#F6F3EF' : '#1F2A37',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: 300,
                    color: i === 0 ? 'rgba(246,243,239,0.65)' : '#5A6A78',
                    lineHeight: 1.75,
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuum of Care */}
      <section style={{ backgroundColor: '#EDE9E3', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
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
              Continuum of Care
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 400,
                color: '#1F2A37',
                lineHeight: 1.2,
              }}
            >
              A Full Pathway to Recovery
            </h2>
          </div>

          {/* Continuum Visual */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'stretch',
              justifyContent: 'center',
              gap: '0',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {continuum.map((stage, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0',
                  flex: '1',
                  minWidth: '200px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    backgroundColor: stage.active ? '#1F2A37' : '#F6F3EF',
                    border: `1px solid ${stage.active ? '#1F2A37' : '#D8CFC4'}`,
                    borderRadius: i === 0 ? '8px 0 0 8px' : i === continuum.length - 1 ? '0 8px 8px 0' : '0',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: stage.active ? 'rgba(246,243,239,0.55)' : '#7C8C7A',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {stage.abbr}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.15rem',
                      fontWeight: 500,
                      color: stage.active ? '#F6F3EF' : '#1F2A37',
                      lineHeight: 1.3,
                    }}
                  >
                    {stage.label}
                  </div>
                </div>
                {i < continuum.length - 1 && (
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    style={{
                      color: '#7C8C7A',
                      flexShrink: 0,
                      margin: '0 -1px',
                      zIndex: 1,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 300,
              color: '#7C8C7A',
              textAlign: 'center',
              marginTop: '2rem',
              fontStyle: 'italic',
              lineHeight: 1.7,
            }}
          >
            Grace Path provides a seamless continuum from intensive to standard outpatient,
            ensuring continuity of clinical care at every stage of recovery.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F6F3EF', padding: '5rem 2rem', borderTop: '1px solid #D8CFC4' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
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
                color: '#1F2A37',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              Begin Outpatient Services
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#5A6A78',
                lineHeight: 1.7,
              }}
            >
              Contact our admissions team to schedule a confidential clinical assessment.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/admissions"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#F6F3EF',
                backgroundColor: '#1F2A37',
                padding: '14px 28px',
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Begin Admissions
            </Link>
            <Link
              to="/iop"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 400,
                color: '#1F2A37',
                backgroundColor: 'transparent',
                padding: '14px 28px',
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: '1px solid #D8CFC4',
              }}
            >
              View IOP Program
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}