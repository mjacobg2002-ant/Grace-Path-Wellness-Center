import { Link } from 'react-router';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#2A2A2A', color: '#C8C0B8' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#F6F3EF',
                letterSpacing: '0.01em',
                marginBottom: '6px',
              }}
            >
              Grace Path Wellness Center
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 400,
                color: '#7C8C7A',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Outpatient Behavioral Health
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                lineHeight: 1.7,
                color: '#9A9088',
                maxWidth: '260px',
              }}
            >
              Providing evidence-based outpatient and intensive outpatient behavioral health services
              to adults in Fairfax County and Prince William County, Virginia.
            </p>
          </div>

          {/* Contact */}
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
              }}
            >
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={14} strokeWidth={1.5} style={{ color: '#7C8C7A', marginTop: '3px', flexShrink: 0 }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', lineHeight: 1.6, color: '#9A9088' }}>
                  Fairfax County & Prince William County<br />Northern Virginia
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} strokeWidth={1.5} style={{ color: '#7C8C7A', flexShrink: 0 }} />
                <a
                  href="tel:+17035550100"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#9A9088', textDecoration: 'none' }}
                >
                  (703) 555-0100
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={14} strokeWidth={1.5} style={{ color: '#7C8C7A', flexShrink: 0 }} />
                <a
                  href="mailto:intake@gracepathwellness.com"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#9A9088', textDecoration: 'none' }}
                >
                  intake@gracepathwellness.com
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
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
              }}
            >
              Programs
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Intensive Outpatient (IOP)', href: '/iop' },
                { label: 'Outpatient Therapy', href: '/outpatient' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'Referral Partners', href: '/referral' },
                { label: 'Insurance Verification', href: '/admissions' },
              ].map((item) => (
                <Link
                  key={item.href + item.label}
                  to={item.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.82rem',
                    color: '#9A9088',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8C0B8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9A9088')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Information */}
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
              }}
            >
              Information
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Patient Portal', href: '/portal' },
                { label: 'Style Guide', href: '/style-guide' },
                { label: 'Privacy Policy', href: '/contact' },
                { label: 'Notice of Privacy Practices', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href + item.label}
                  to={item.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.82rem',
                    color: '#9A9088',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8C0B8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9A9088')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HIPAA / Compliance Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem 2rem',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={13} strokeWidth={1.5} style={{ color: '#7C8C7A' }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                color: '#666058',
                letterSpacing: '0.04em',
              }}
            >
              HIPAA Compliant · Licensed by Virginia DBHDS · All communications are confidential
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.72rem',
              color: '#555',
            }}
          >
            © 2026 Grace Path Wellness Center. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}