"use client";

import Link from "next/link";
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import classes from "./Hero.module.css";

const content = {
  hr: {
    overline: "Istraživački projekt",
    title: "ENEMAR",
    subtitle: "Energetska učinkovitost i smanjenje emisija štetnih plinova u pomorskom prometu",
    text: "Projekt EnEMar istražuje i uspoređuje tehnološke i operativne mjere koje doprinose dekarbonizaciji pomorskog prometa, s naglaskom na energetsku učinkovitost brodova, modeliranje mjera i razvoj smjernica za donošenje odluka u brodarskoj praksi.",
    cta1: { href: "/hr/o-projektu", label: "O projektu" },
    meta: [
      { label: "Trajanje", value: "2025 — 2029" },
      { label: "Trajanje (mjeseci)", value: "48" },
      { label: "Fokus", value: "Energetska učinkovitost, Emisije, Modeliranje" },
      { label: "Regulative", value: "IMO 2023, EU ETS, FuelEU Maritime" },
    ],
  },

  en: {
    overline: "Research project",
    title: "ENEMAR",
    subtitle: "Energy efficiency and reduction of harmful gas emissions in maritime transport",
    text: "The EnEMar project explores and compares technological and operational measures that contribute to the decarbonization of maritime transport, with a focus on ship energy efficiency, measure modelling, and the development of decision-making guidelines for shipping practice.",
    cta1: { href: "/en/about-project", label: "About the project" },
    meta: [
      { label: "Duration", value: "2025 — 2029" },
      { label: "Duration (months)", value: "48" },
      { label: "Focus", value: "Energy Efficiency, Emissions, Modelling" },
      { label: "Regulations", value: "IMO 2023, EU ETS, FuelEU Maritime" },
    ],
  },
};

export default function Hero({ locale = "hr" }) {
  const t = content[locale] || content.hr;

  return (
    <Box component="section" className={classes.hero}>
      {/* The Grid and Waves are now joined in one container */}
      <div className={classes.decorativeWrapper} aria-hidden="true">
        <svg className={classes.waves} viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#85b7e6" />
              <stop offset="50%" stopColor="#67b26f" />
              <stop offset="100%" stopColor="#a3d9a5" />
            </linearGradient>
          </defs>
          <path d="M0,200 C150,100 350,300 550,200 S750,100 800,200" stroke="url(#hero-gradient)" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M0,210 C200,120 400,280 600,210 S780,110 800,210" stroke="url(#hero-gradient)" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M0,190 C100,150 300,250 500,190 S700,150 800,190" stroke="url(#hero-gradient)" strokeWidth="2" fill="none" opacity="0.8" />
        </svg>
      </div>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid size={{ xs: 12, md: 8, lg: 7 }}>
            <Stack spacing={4} className={classes.intro}>
              <Typography variant="overline" className={classes.overline} data-aos="fade-up">
                {t.overline}
              </Typography>

              <Typography variant="h1" className={classes.title} data-aos="fade-up" data-aos-delay="40">
                {t.title}
              </Typography>

              <Typography variant="h2" className={classes.subtitle} data-aos="fade-up" data-aos-delay="80">
                {t.subtitle}
              </Typography>

              <Typography variant="body1" className={classes.description} data-aos="fade-up" data-aos-delay="120">
                {t.text}
              </Typography>

              <Box data-aos="fade-up" data-aos-delay="160">
                <Button component={Link} href={t.cta1.href} variant="contained" className={classes.ctaButton}>
                  {t.cta1.label} &rarr;
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box className={classes.metaSection}>
        <Container maxWidth="lg">
          <Grid container>
            {t.meta.map((item, index) => (
              <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack className={classes.metaItem}>
                  <Typography variant="caption" className={classes.metaLabel}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" className={classes.metaValue}>
                    {item.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
