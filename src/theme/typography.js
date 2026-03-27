const typography = {
  fontFamily: "var(--font-body), system-ui, -apple-system, sans-serif",

  h1: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(3.4rem, 8vw, 6.8rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.04em",
    marginBottom: "0.24em",
  },

  h2: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
    lineHeight: 0.96,
    letterSpacing: "-0.035em",
    marginBottom: "0.28em",
  },

  h3: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    marginBottom: "0.32em",
  },

  h4: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
    lineHeight: 1.12,
    letterSpacing: "-0.02em",
    marginBottom: "0.38em",
  },

  h5: {
    fontWeight: 700,
    fontSize: "1.05rem",
    lineHeight: 1.3,
    letterSpacing: "-0.015em",
  },

  h6: {
    fontWeight: 700,
    fontSize: "0.95rem",
    lineHeight: 1.3,
    letterSpacing: "0.01em",
  },

  body1: {
    fontSize: "1.02rem",
    lineHeight: 1.78,
    letterSpacing: "-0.012em",
  },

  body2: {
    fontSize: "0.94rem",
    lineHeight: 1.7,
    letterSpacing: "-0.01em",
  },

  subtitle1: {
    fontSize: "1.1rem",
    lineHeight: 1.65,
    letterSpacing: "-0.012em",
  },

  subtitle2: {
    fontSize: "0.9rem",
    lineHeight: 1.5,
    fontWeight: 600,
    letterSpacing: "0.02em",
  },

  overline: {
    fontWeight: 700,
    fontSize: "0.76rem",
    lineHeight: 1.4,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },

  caption: {
    fontSize: "0.82rem",
    lineHeight: 1.5,
  },

  button: {
    fontWeight: 700,
    fontSize: "0.95rem",
    textTransform: "none",
    letterSpacing: "-0.01em",
  },

  display: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(4rem, 10vw, 8.4rem)",
    lineHeight: 0.88,
    letterSpacing: "-0.05em",
  },

  nav: {
    fontSize: "0.95rem",
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },

  brand: {
    fontSize: "clamp(1.35rem, 2vw, 1.9rem)",
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: "-0.055em",
    textTransform: "uppercase",
  },

  muted: {
    fontSize: "0.95rem",
    lineHeight: 1.65,
  },
};

export default typography;
