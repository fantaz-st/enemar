"use client";

import Link from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PostCard from "@/components/PostCard/PostCard";
import classes from "./HomeNews.module.css";

const content = {
  hr: {
    eyebrow: "Bilten i novosti",
    title: "Najnovije objave",
    intro: "Pratite vijesti, objave, aktivnosti i sadržaje povezane s projektom EnEMar.",
    cta: "Sve objave",
    href: "/hr/novosti",
  },
  en: {
    eyebrow: "Bulletin and News",
    title: "Latest posts",
    intro: "Follow news, updates, activities and project-related content from EnEMar.",
    cta: "All posts",
    href: "/en/news",
  },
};

export default function HomeNews({ data, locale = "hr" }) {
  const t = content[locale] || content.hr;
  const posts = data?.posts?.nodes || [];

  if (!posts.length) return null;

  return (
    <Box component="section" className={classes.wrap}>
      <div className={classes.decorativeWrapper} aria-hidden="true">
        <svg className={classes.waves} viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="news-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#85b7e6" />
              <stop offset="50%" stopColor="#67b26f" />
              <stop offset="100%" stopColor="#a3d9a5" />
            </linearGradient>
          </defs>
          <path d="M0,200 C150,100 350,300 550,200 S750,100 800,200" stroke="url(#news-gradient)" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M0,210 C200,120 400,280 600,210 S780,110 800,210" stroke="url(#news-gradient)" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M0,190 C100,150 300,250 500,190 S700,150 800,190" stroke="url(#news-gradient)" strokeWidth="2" fill="none" opacity="0.8" />
        </svg>
      </div>

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.head} data-aos="fade-up">
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary.main">
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" color="text.primary">
              {t.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" className={classes.intro}>
              {t.intro}
            </Typography>
          </Stack>

          <Box className={classes.actions}>
            <Button component={Link} href={t.href} variant="outlined" color="primary">
              {t.cta}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {posts.slice(0, 6).map((post, index) => (
            <Grid key={post.id || post.slug} size={{ xs: 12, sm: 6, xl: 4 }} data-aos="fade-up" data-aos-delay={index * 70}>
              <PostCard slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} locale={locale} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
