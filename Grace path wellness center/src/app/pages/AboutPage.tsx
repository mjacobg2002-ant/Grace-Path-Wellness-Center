import { Link } from 'react-router';
import { PageTransition } from '../components/PageTransition';

const aboutImg =
  'https://images.unsplash.com/photo-1686100511314-7d4a52987f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBsb2JieSUyMG5ldXRyYWwlMjB0b25lcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIyODk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1920';

const values = [
  {
    title: 'Clinical Evidence',
    desc: 'All modalities employed at Grace Path are grounded in peer-reviewed research and clinical best practice guidelines for substance use and co-occurring disorders.',
  },
  {
    title: 'Personal Accountability',
    desc: 'We hold clients to a structured standard because we believe accountability is a prerequisite for sustainable change — not a punitive measure.',
  },
  {
    title: 'Discretion',
    desc: 'Our clients include professionals, executives, and individuals for whom privacy is paramount. We operate with institutional-grade confidentiality protocols.',
  },
  {
    title: 'Continuity of Care',
    desc: 'We manage clinical transitions carefully, from IOP to outpatient, ensuring no gaps in treatment momentum or therapeutic alliance.',
  },
];

export function AboutPage() {
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
            backgroundImage: `url(${aboutImg})`,
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
            Who We Are
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 400,
              color: '#F6F3EF',
              lineHeight: 1.1,
              maxWidth: '580px',
            }}
          >
            About Grace Path Wellness Center
          </h1>
        </div>
      </section>

      {/* Mission */}
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
                Mission
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
                Care Delivered with Precision and Dignity
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
                Grace Path Wellness Center was founded to fill a gap in Northern Virginia's behavioral
                health landscape: a facility that could serve adults who need structured clinical
                treatment without the atmosphere of a residential program.
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
                We are a clinical operation — not a wellness retreat. Our work is grounded in
                diagnostic accuracy, therapeutic rigor, and the belief that long-term recovery
                is built through structured, evidence-based practice.
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
                We serve Fairfax County, Prince William County, and the surrounding communities
                of Northern Virginia, accepting court referrals, hospital step-downs, EAP placements,
                and voluntary admissions with equal care.
              </p>
            </div>

            {/* Philosophy */}
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
                Philosophy
              </div>
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  borderLeft: '3px solid #7C8C7A',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                "Recovery is not a sentiment. It is a clinical outcome, built through
                deliberate therapeutic work, consistent structure, and honest assessment."
              </blockquote>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: '#5A6A78',
                  lineHeight: 1.8,
                }}
              >
                We do not subscribe to vague promises or motivational platitudes. Our clinical
                philosophy centers on measurable progress, professional standards, and authentic
                engagement with the difficulty of behavioral change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#EDE9E3', padding: '7rem 2rem' }}>
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
              Our Values
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 400,
                color: '#1F2A37',
              }}
            >
              What Guides Our Practice
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#F6F3EF',
                  borderRadius: '8px',
                  padding: '2.25rem',
                  border: '1px solid rgba(216,207,196,0.5)',
                  boxShadow: '0 1px 8px rgba(31,42,55,0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#1F2A37',
                    marginBottom: '1rem',
                  }}
                >
                  {v.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: 300,
                    color: '#5A6A78',
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Director */}
      <section style={{ backgroundColor: '#F6F3EF', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '4rem',
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
                Leadership
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
                Clinical Director
              </h2>
              <div style={{ width: '48px', height: '1px', backgroundColor: '#7C8C7A', marginBottom: '2rem' }} />
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
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    color: '#1F2A37',
                    marginBottom: '4px',
                  }}
                >
                  [Clinical Director Name], LCSW, CSAC
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: '#7C8C7A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                  }}
                >
                  Licensed Clinical Social Worker · Certified Substance Abuse Counselor
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: '#3D4E5E',
                    lineHeight: 1.8,
                    marginBottom: '1rem',
                  }}
                >
                  A licensed clinician with over 15 years of experience in addiction medicine and
                  behavioral health, [Clinical Director Name] brings specialized expertise in
                  dual-diagnosis treatment, trauma-informed care, and clinical program development.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: '#3D4E5E',
                    lineHeight: 1.8,
                  }}
                >
                  Trained in CBT, DBT, and motivational interviewing, they have previously served
                  in clinical leadership roles at NOVA-area hospital systems and community mental
                  health organizations.
                </p>
              </div>
            </div>

            {/* Licensing & Community */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: '#1F2A37',
                  borderRadius: '8px',
                  padding: '2.25rem',
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
                    marginBottom: '1.25rem',
                  }}
                >
                  Licensing & Accreditation
                </div>
                {[
                  'Licensed by Virginia DBHDS',
                  'ASAP Authorized Provider',
                  'CARF Accreditation (pending)',
                  'HIPAA & 42 CFR Part 2 Compliant',
                  'Medicaid Provider (Virginia)',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#7C8C7A',
                        marginTop: '7px',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.84rem',
                        fontWeight: 300,
                        color: 'rgba(246,243,239,0.75)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

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
                    marginBottom: '1.25rem',
                  }}
                >
                  Community Involvement
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: 300,
                    color: '#3D4E5E',
                    lineHeight: 1.8,
                  }}
                >
                  Grace Path is an active participant in the Northern Virginia behavioral health
                  continuum. We collaborate with Fairfax County DBHDS offices, local hospital
                  systems, and community legal organizations to ensure clients receive
                  coordinated, comprehensive support.
                </p>
              </div>
            </div>
          </div>
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
              Begin the Admissions Process
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#5A6A78',
              }}
            >
              Reach our clinical team confidentially — seven days a week.
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
              Begin Consultation
            </Link>
            <Link
              to="/referral"
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
              Refer a Client
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}