import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';

const navLinks = [
  {
    label: 'Programs',
    children: [
      { label: 'Intensive Outpatient (IOP)', href: '/iop' },
      { label: 'Outpatient Therapy', href: '/outpatient' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Referral Partners', href: '/referral' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setProgramsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setProgramsOpen(false);
    }, 200);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#F6F3EF',
        borderBottom: '1px solid rgba(216, 207, 196, 0.4)',
        boxShadow: '0px 1px 0px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Desktop Header - Hidden on mobile */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 4vw, 80px)' }} className="hidden lg:block">
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: '96px',
          }}
        >
          {/* Logo Section */}
          <Link to="/" style={{ textDecoration: 'none', minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.375rem)',
                  fontWeight: 500,
                  color: '#1F2A37',
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap',
                }}
              >
                Grace Path
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.375rem)',
                  fontWeight: 500,
                  color: '#1F2A37',
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap',
                }}
              >
                Wellness Center
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.5625rem',
                  fontWeight: 400,
                  color: '#1F2A37',
                  opacity: 0.7,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                  marginTop: '4px',
                }}
              >
                Behavioral Health ·
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.5625rem',
                  fontWeight: 400,
                  color: '#1F2A37',
                  opacity: 0.7,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                }}
              >
                Northern Virginia
              </div>
            </div>
          </Link>

          {/* Navigation - Center */}
          <nav style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(20px, 2.5vw, 36px)',
            justifyContent: 'center',
            padding: '0 24px',
          }}>
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: '#1F2A37',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      padding: 0,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#7C8C7A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#1F2A37')}
                  >
                    {link.label}
                    <ChevronDown size={12} strokeWidth={2} />
                  </button>
                  {programsOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '16px',
                        backgroundColor: '#F6F3EF',
                        border: '1px solid rgba(216, 207, 196, 0.6)',
                        borderRadius: '8px',
                        boxShadow: '0 8px 32px rgba(31,42,55,0.08)',
                        padding: '12px 0',
                        minWidth: '240px',
                        zIndex: 100,
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          style={{
                            display: 'block',
                            padding: '12px 24px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.875rem',
                            color: '#1F2A37',
                            textDecoration: 'none',
                            letterSpacing: '0.01em',
                            transition: 'background-color 0.15s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(168, 197, 160, 0.08)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href!}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: location.pathname === link.href ? '#7C8C7A' : '#1F2A37',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7C8C7A')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      location.pathname === link.href ? '#7C8C7A' : '#1F2A37')
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button - Right */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
            <Link
              to="/portal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 400,
                color: '#7C8C7A',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                transition: 'color 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1F2A37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#7C8C7A')}
            >
              <Lock size={12} strokeWidth={1.5} />
              Portal
            </Link>
            <Link
              to="/admissions"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#F6F3EF',
                backgroundColor: '#2C3E50',
                padding: '10px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#354c63')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C3E50')}
            >
              <span>Begin</span>
              <span>Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header - Visible only on mobile */}
      <div className="lg:hidden">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '88px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: '#1F2A37',
                    letterSpacing: '0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  Grace Path
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: '#1F2A37',
                    letterSpacing: '0.01em',
                    lineHeight: 1.15,
                  }}
                >
                  Wellness Center
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.5625rem',
                    fontWeight: 400,
                    color: '#1F2A37',
                    opacity: 0.7,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                    marginTop: '3px',
                  }}
                >
                  Behavioral Health ·
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.5625rem',
                    fontWeight: 400,
                    color: '#1F2A37',
                    opacity: 0.7,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                  }}
                >
                  Northern Virginia
                </div>
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1F2A37', padding: '8px' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slide-out */}
        {mobileOpen && (
          <div
            style={{
              backgroundColor: '#F6F3EF',
              borderTop: '1px solid rgba(216, 207, 196, 0.4)',
              padding: '1.5rem 1.5rem 2rem',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#7C8C7A',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '14px 0 6px',
                      }}
                    >
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        style={{
                          display: 'block',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.9rem',
                          color: '#1F2A37',
                          textDecoration: 'none',
                          padding: '10px 0 10px 12px',
                          borderLeft: '2px solid #D8CFC4',
                          marginBottom: '2px',
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href!}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: '#1F2A37',
                      textDecoration: 'none',
                      padding: '14px 0',
                      borderBottom: '1px solid #EDE9E3',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/admissions"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: '#F6F3EF',
                  backgroundColor: '#2C3E50',
                  padding: '14px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginTop: '1.5rem',
                }}
              >
                Begin Consultation
              </Link>
              <Link
                to="/portal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 400,
                  color: '#7C8C7A',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <Lock size={13} strokeWidth={1.5} />
                Patient Portal
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}