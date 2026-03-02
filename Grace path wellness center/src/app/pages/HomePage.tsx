import { Link } from "react-router";
import { Award, LayoutGrid, CreditCard, MapPin, ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { AnimatedSection } from "../components/AnimatedSection";

const heroImg =
  "https://images.unsplash.com/photo-1629292116668-921112f088db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYXJjaGl0ZWN0dXJhbCUyMGludGVyaW9yJTIwd2FybSUyMG5ldXRyYWx8ZW58MXx8fHwxNzcyMjg5NjEzfDA&ixlib=rb-4.1.0&q=80&w=1920";

const approachFeatures = [
  {
    icon: <Award size={22} strokeWidth={1.5} />,
    title: "Clinical Excellence",
    desc: "Licensed clinicians with specialty training in substance use and co-occurring disorders.",
  },
  {
    icon: <LayoutGrid size={22} strokeWidth={1.5} />,
    title: "Structured Programming",
    desc: "Consistent scheduling, measurable milestones, and outcome-based care plans.",
  },
  {
    icon: <CreditCard size={22} strokeWidth={1.5} />,
    title: "Insurance Accepted",
    desc: "Most major commercial insurance plans, Medicaid, and self-pay options available.",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Fairfax & Prince William",
    desc: "Convenient Northern Virginia locations serving Fairfax and Prince William Counties.",
  },
];

const programs = [
  {
    title: "Intensive Outpatient Program",
    subtitle: "IOP",
    description:
      "3–5 days per week structured group therapy and clinical support for individuals requiring more than weekly therapy.",
    href: "/iop",
    tag: "Core Program",
  },
  {
    title: "Outpatient Therapy",
    subtitle: "OP",
    description:
      "Individual and group counseling tailored to long-term recovery and mental health stabilization.",
    href: "/outpatient",
    tag: "Ongoing Care",
  },
  {
    title: "Medication-Assisted Treatment",
    subtitle: "MAT",
    description:
      "Integrated medication and therapy model for opioid and alcohol use disorders. Currently in expansion.",
    href: "/admissions",
    tag: "Future Expansion",
  },
];

const populations = [
  "Adults 18+",
  "Court-Referred Clients",
  "DUI / ASAP Cases",
  "Professionals Seeking Discreet Care",
  "Individuals Transitioning from Higher Levels of Care",
  "Hospital Discharge Referrals",
];

const testimonials = [
  {
    quote:
      "The structure of Grace Path's program gave me accountability I could not find anywhere else. The clinical staff were direct, professional, and genuinely invested in my progress.",
    name: "Former IOP Client",
    detail: "Fairfax County, Virginia",
  },
  {
    quote:
      "As a referring attorney, the intake process is efficient and the team communicates clearly with my office. I trust this program for court-mandated referrals.",
    name: "Referring Attorney",
    detail: "Northern Virginia Bar",
  },
  {
    quote:
      "My privacy was respected completely throughout treatment. The environment feels clinical and professional — not like a typical program.",
    name: "Outpatient Client",
    detail: "Prince William County, Virginia",
  },
];

const insuranceLogos = [
  "Anthem", "Aetna", "Cigna", "United Healthcare", "Medicaid", "Optum", "BlueCross BlueShield", "Humana",
];

export function HomePage() {
  return (
    <PageTransition>
    <div>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.35) saturate(0.6)",
          }}
        />
        {/* Warm overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(31,42,55,0.65) 0%, rgba(31,42,55,0.4) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "8rem 2rem 6rem",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
            <div
              style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "#7C8C7A",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                backgroundColor: "rgba(124,140,122,0.15)",
                border: "1px solid rgba(124,140,122,0.3)",
                padding: "6px 14px",
                borderRadius: "4px",
                marginBottom: "2rem",
              }}
            >
              Outpatient Behavioral Health · Northern Virginia
            </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 400,
                color: "#F6F3EF",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1.75rem",
              }}
            >
              Structured Care<br />for Lasting Change.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                fontWeight: 300,
                color: "rgba(246,243,239,0.78)",
                lineHeight: 1.8,
                maxWidth: "560px",
                marginBottom: "3rem",
              }}
            >
              Grace Path Wellness Center provides intensive outpatient and outpatient behavioral
              health services in Northern Virginia. Clinically grounded care delivered with
              dignity and discretion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <Link
                to="/admissions"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "#1F2A37",
                  backgroundColor: "#F6F3EF",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "background-color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EDE9E3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F6F3EF")}
              >
                Begin Confidential Consultation
              </Link>
              <Link
                to="/admissions"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  color: "#F6F3EF",
                  backgroundColor: "transparent",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(246,243,239,0.3)",
                  transition: "border-color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(246,243,239,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(246,243,239,0.3)")}
              >
                Verify Insurance
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, #F6F3EF)",
            }}
          />
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F6F3EF", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            {/* Left — Mission */}
            <AnimatedSection>
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  color: "#7C8C7A",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Our Approach
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                  fontWeight: 400,
                  color: "#1F2A37",
                  lineHeight: 1.2,
                  marginBottom: "2rem",
                }}
              >
                Clinical Integrity at Every Stage of Care
              </h2>
              <div
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: "#7C8C7A",
                  marginBottom: "2rem",
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#3D4E5E",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                At Grace Path, we operate from a foundation of evidence-based clinical practice.
                Our treatment model prioritizes measurable outcomes, personal accountability,
                and structured therapeutic frameworks proven to support lasting recovery.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#3D4E5E",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                We provide a comprehensive continuum of care — from intensive outpatient through
                long-term outpatient maintenance — with professional clinical leadership guiding
                each client's individualized treatment plan.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#3D4E5E",
                  lineHeight: 1.85,
                }}
              >
                Family involvement is incorporated when clinically appropriate, and all care is
                delivered with strict adherence to HIPAA and professional confidentiality standards.
              </p>
              <Link
                to="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "2rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#1F2A37",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #1F2A37",
                  paddingBottom: "2px",
                }}
              >
                Learn About Our Team
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
            </AnimatedSection>

            {/* Right — Icon Grid */}
            <AnimatedSection delay={0.15} direction="left">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5px",
                backgroundColor: "#D8CFC4",
                border: "1.5px solid #D8CFC4",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {approachFeatures.map((f, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#F6F3EF",
                    padding: "2.25rem 2rem",
                  }}
                >
                  <div style={{ color: "#7C8C7A", marginBottom: "1rem" }}>{f.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: "#1F2A37",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 300,
                      color: "#5A6A78",
                      lineHeight: 1.7,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EDE9E3", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "#7C8C7A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Clinical Programs
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                color: "#1F2A37",
                lineHeight: 1.2,
                maxWidth: "500px",
              }}
            >
              Services Tailored to Your Level of Care
            </h2>
          </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {programs.map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
              <div
                key={i}
                style={{
                  backgroundColor: "#F6F3EF",
                  borderRadius: "8px",
                  padding: "2.5rem",
                  boxShadow: "0 2px 16px rgba(31,42,55,0.06)",
                  border: "1px solid rgba(216,207,196,0.6)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 28px rgba(31,42,55,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(31,42,55,0.06)")}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "#7C8C7A",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backgroundColor: "rgba(124,140,122,0.1)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    marginBottom: "1.5rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {program.tag}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "#7C8C7A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {program.subtitle}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.55rem",
                    fontWeight: 500,
                    color: "#1F2A37",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.84rem",
                    fontWeight: 300,
                    color: "#5A6A78",
                    lineHeight: 1.75,
                    flexGrow: 1,
                    marginBottom: "2rem",
                  }}
                >
                  {program.description}
                </p>
                <div
                  style={{
                    borderTop: "1px solid #D8CFC4",
                    paddingTop: "1.5rem",
                  }}
                >
                  <Link
                    to={program.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "#1F2A37",
                      textDecoration: "none",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#7C8C7A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1F2A37")}
                  >
                    Learn More
                    <ArrowRight size={12} strokeWidth={2} />
                  </Link>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F6F3EF", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "#7C8C7A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Patient Population
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                color: "#1F2A37",
                lineHeight: 1.2,
              }}
            >
              Who We Serve
            </h2>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "1px",
              backgroundColor: "#D8CFC4",
              border: "1px solid #D8CFC4",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {populations.map((pop, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F6F3EF",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#7C8C7A",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "#1F2A37",
                    letterSpacing: "0.01em",
                  }}
                >
                  {pop}
                </span>
              </div>
            ))}
          </div>
          </AnimatedSection>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 300,
              color: "#7C8C7A",
              marginTop: "1.5rem",
              letterSpacing: "0.02em",
              fontStyle: "italic",
            }}
          >
            All inquiries are handled with complete confidentiality. Grace Path serves adults 18+ in Fairfax and Prince William Counties.
          </p>
        </div>
      </section>

      {/* ── ADMISSIONS PROCESS ────────────────────────────────── */}
      <section style={{ backgroundColor: "#1F2A37", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "#7C8C7A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Getting Started
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                color: "#F6F3EF",
                lineHeight: 1.2,
              }}
            >
              The Admissions Process
            </h2>
          </div>
          </AnimatedSection>

          {/* Timeline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0",
              position: "relative",
            }}
          >
            {[
              {
                step: "01",
                title: "Confidential Consultation",
                desc: "Speak privately with our clinical team to discuss your situation and treatment needs. No obligation.",
              },
              {
                step: "02",
                title: "Insurance & Clinical Assessment",
                desc: "We verify your benefits and conduct a comprehensive clinical evaluation to determine appropriate level of care.",
              },
              {
                step: "03",
                title: "Program Placement & Scheduling",
                desc: "Placement into the right program with a structured schedule that accommodates your professional and personal life.",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "2.5rem",
                  borderLeft: i > 0 ? "1px solid rgba(216,207,196,0.15)" : "none",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "rgba(124,140,122,0.25)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "#F6F3EF",
                    marginBottom: "0.85rem",
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(246,243,239,0.55)",
                    lineHeight: 1.8,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(216,207,196,0.15)", margin: "3.5rem 0" }} />

          {/* Insurance Logos */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "rgba(124,140,122,0.8)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Insurance Accepted
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {insuranceLogos.map((ins, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 400,
                    color: "rgba(246,243,239,0.45)",
                    border: "1px solid rgba(216,207,196,0.15)",
                    borderRadius: "6px",
                    padding: "8px 18px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {ins}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link
              to="/admissions"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "#1F2A37",
                backgroundColor: "#F6F3EF",
                padding: "16px 36px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Begin Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EDE9E3", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "#7C8C7A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Client & Partner Feedback
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                color: "#1F2A37",
                lineHeight: 1.2,
              }}
            >
              Words from Those We've Served
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F6F3EF",
                  borderRadius: "8px",
                  padding: "2.5rem",
                  boxShadow: "0 2px 12px rgba(31,42,55,0.05)",
                  border: "1px solid rgba(216,207,196,0.5)",
                }}
              >
                <Quote size={20} strokeWidth={1} style={{ color: "#7C8C7A", marginBottom: "1.25rem" }} />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#1F2A37",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "1.75rem",
                  }}
                >
                  "{t.quote}"
                </p>
                <div style={{ borderTop: "1px solid #D8CFC4", paddingTop: "1.25rem" }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#1F2A37",
                      marginBottom: "2px",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 300,
                      color: "#7C8C7A",
                    }}
                  >
                    {t.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F6F3EF",
          padding: "5rem 2rem",
          borderTop: "1px solid #D8CFC4",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                fontWeight: 400,
                color: "#1F2A37",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Ready to take the next step?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "#5A6A78",
                lineHeight: 1.7,
              }}
            >
              Our clinical team is available to assist with intake, insurance verification, and program questions.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link
              to="/admissions"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#F6F3EF",
                backgroundColor: "#1F2A37",
                padding: "14px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Begin Consultation
            </Link>
            <Link
              to="/referral"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#1F2A37",
                backgroundColor: "transparent",
                padding: "14px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "1px solid #D8CFC4",
                display: "inline-block",
              }}
            >
              Referral Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}