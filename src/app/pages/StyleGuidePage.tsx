import { Link } from 'react-router';
import { PageTransition } from '../components/PageTransition';

const palette = [
  { name: 'Warm Ivory', hex: '#F6F3EF', role: 'Primary Background', textColor: '#1F2A37' },
  { name: 'Deep Slate Navy', hex: '#1F2A37', role: 'Primary Text / CTA Background', textColor: '#F6F3EF' },
  { name: 'Muted Sage', hex: '#7C8C7A', role: 'Accent / Labels / Icons', textColor: '#F6F3EF' },
  { name: 'Soft Sand', hex: '#D8CFC4', role: 'Borders / Dividers / Secondary Neutral', textColor: '#1F2A37' },
  { name: 'Section Cream', hex: '#EDE9E3', role: 'Alternate Section Background', textColor: '#1F2A37' },
  { name: 'Charcoal', hex: '#2A2A2A', role: 'Footer Background', textColor: '#C8C0B8' },
];

const typographyExamples = [
  {
    tag: 'Display Headline',
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '3.5rem',
      fontWeight: 400,
      color: '#1F2A37',
      lineHeight: 1.1,
    },
    sample: 'Structured Care for Lasting Change.',
  },
  {
    tag: 'H1 — Page Title',
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '2.8rem',
      fontWeight: 400,
      color: '#1F2A37',
      lineHeight: 1.15,
    },
    sample: 'Intensive Outpatient Program',
  },
  {
    tag: 'H2 — Section Header',
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '2rem',
      fontWeight: 400,
      color: '#1F2A37',
      lineHeight: 1.2,
    },
    sample: 'Clinical Integrity at Every Stage',
  },
  {
    tag: 'H3 — Card Title',
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#1F2A37',
      lineHeight: 1.3,
    },
    sample: 'Outpatient Behavioral Health',
  },
  {
    tag: 'Eyebrow / Label',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.68rem',
      fontWeight: 500,
      color: '#7C8C7A',
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
    },
    sample: 'Clinical Programs',
  },
  {
    tag: 'Body — Standard',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      fontWeight: 300,
      color: '#3D4E5E',
      lineHeight: 1.85,
    },
    sample:
      'Grace Path Wellness Center provides evidence-based intensive outpatient and outpatient behavioral health services to adults in Northern Virginia.',
  },
  {
    tag: 'Body — Small',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.78rem',
      fontWeight: 300,
      color: '#5A6A78',
      lineHeight: 1.75,
    },
    sample: 'All treatment information is protected under HIPAA and 42 CFR Part 2.',
  },
  {
    tag: 'Quote / Italic',
    style: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '1.2rem',
      fontWeight: 400,
      color: '#1F2A37',
      fontStyle: 'italic' as const,
      lineHeight: 1.65,
    },
    sample:
      '"Recovery is not a sentiment. It is a clinical outcome built through deliberate therapeutic work."',
  },
];

const uiComponents = [
  { label: 'Primary CTA', el: 'button', variant: 'primary' },
  { label: 'Secondary CTA', el: 'button', variant: 'secondary' },
  { label: 'Ghost CTA', el: 'button', variant: 'ghost' },
];

export function StyleGuidePage() {
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
              Brand Reference
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
              Brand Style Guide
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
              Visual identity standards for Grace Path Wellness Center. All brand elements
              should reflect the refined, clinical, and discreet character of the practice.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section style={{ backgroundColor: '#F6F3EF', padding: '7rem 2rem' }}>
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
                01 — Color System
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                }}
              >
                Brand Color Palette
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {palette.map((color, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #D8CFC4',
                    boxShadow: '0 2px 8px rgba(31,42,55,0.06)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: color.hex,
                      height: '120px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        fontWeight: 400,
                        color: color.textColor,
                        letterSpacing: '0.06em',
                        opacity: 0.7,
                      }}
                    >
                      {color.hex}
                    </span>
                  </div>
                  <div style={{ backgroundColor: '#F6F3EF', padding: '14px 16px' }}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: '#1F2A37',
                        marginBottom: '3px',
                      }}
                    >
                      {color.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 300,
                        color: '#7C8C7A',
                      }}
                    >
                      {color.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
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
                02 — Typography
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                }}
              >
                Type System
              </h2>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#7C8C7A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Headlines
                  </span>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.95rem', color: '#1F2A37', marginTop: '2px' }}>
                    Cormorant Garamond — Elegant editorial serif
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#7C8C7A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Body & UI
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#1F2A37', marginTop: '2px' }}>
                    Inter — Clean humanist sans-serif
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {typographyExamples.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F6F3EF',
                    borderRadius: i === 0 ? '8px 8px 0 0' : i === typographyExamples.length - 1 ? '0 0 8px 8px' : '0',
                    padding: '2rem 2.5rem',
                    borderTop: i > 0 ? '1px solid #D8CFC4' : 'none',
                    border: i === 0 ? '1px solid #D8CFC4' : '1px solid #D8CFC4',
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '2rem',
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
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t.tag}
                    </div>
                  </div>
                  <div style={t.style}>{t.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UI Components */}
        <section style={{ backgroundColor: '#F6F3EF', padding: '7rem 2rem' }}>
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
                03 — Components
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1F2A37',
                }}
              >
                UI Components
              </h2>
            </div>

            {/* Buttons */}
            <div style={{ marginBottom: '4rem' }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: '#7C8C7A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Buttons
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
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
                  }}
                >
                  Primary CTA
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#1F2A37',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid #D8CFC4',
                    borderRadius: '6px',
                    padding: '14px 28px',
                    cursor: 'pointer',
                  }}
                >
                  Secondary CTA
                </button>
                <button
                  style={{
                    backgroundColor: '#F6F3EF',
                    color: '#1F2A37',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid #1F2A37',
                    borderRadius: '6px',
                    padding: '14px 28px',
                    cursor: 'pointer',
                  }}
                >
                  Outlined CTA
                </button>
              </div>
              {/* On dark */}
              <div
                style={{
                  backgroundColor: '#1F2A37',
                  borderRadius: '8px',
                  padding: '2rem',
                  marginTop: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: '#7C8C7A',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginRight: '1rem',
                  }}
                >
                  On Dark
                </span>
                <button
                  style={{
                    backgroundColor: '#F6F3EF',
                    color: '#1F2A37',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '14px 28px',
                    cursor: 'pointer',
                  }}
                >
                  Light Primary
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#F6F3EF',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(246,243,239,0.25)',
                    borderRadius: '6px',
                    padding: '14px 28px',
                    cursor: 'pointer',
                  }}
                >
                  Ghost Light
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: '#7C8C7A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Card Variants
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {[
                  { bg: '#F6F3EF', border: '#D8CFC4', title: 'Light Card', label: 'Standard' },
                  { bg: '#EDE9E3', border: '#D8CFC4', title: 'Cream Card', label: 'Alternate Section' },
                  { bg: '#1F2A37', border: 'transparent', title: 'Dark Card', label: 'Emphasis' },
                ].map((card, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: card.bg,
                      borderRadius: '8px',
                      padding: '2rem',
                      border: `1px solid ${card.border}`,
                      boxShadow: '0 2px 12px rgba(31,42,55,0.05)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        color: '#7C8C7A',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {card.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: i === 2 ? '#F6F3EF' : '#1F2A37',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {card.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 300,
                        color: i === 2 ? 'rgba(246,243,239,0.6)' : '#5A6A78',
                        lineHeight: 1.7,
                      }}
                    >
                      Example card body text. Rounded 8px corners, subtle shadow, clean border.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Voice & Tone */}
        <section style={{ backgroundColor: '#1F2A37', padding: '7rem 2rem' }}>
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
                04 — Voice & Tone
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#F6F3EF',
                }}
              >
                Brand Voice Standards
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                {
                  title: 'Use',
                  items: [
                    'Clinical and precise language',
                    'Evidence-based terminology',
                    'Direct, respectful tone',
                    'Professional without being cold',
                    'Measured confidence',
                  ],
                  color: '#7C8C7A',
                },
                {
                  title: 'Avoid',
                  items: [
                    'Spiritual or religious language',
                    '"Journey" / "transformation" clichés',
                    'Overly emotional appeals',
                    'Sensational or dramatic copy',
                    '"Rehab" or "detox" references',
                  ],
                  color: '#D8CFC4',
                },
              ].map((col, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(246,243,239,0.04)',
                    borderRadius: '8px',
                    padding: '2.25rem',
                    border: '1px solid rgba(216,207,196,0.12)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: col.color,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {col.title}
                  </div>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <div
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: col.color,
                          marginTop: '7px',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.84rem',
                          fontWeight: 300,
                          color: 'rgba(246,243,239,0.7)',
                          lineHeight: 1.65,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}