"use client";

import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";

import classes from "./HomeAbout.module.css";
import about from "./about-content";

export default function HomeAbout({ locale = "hr" }) {
  const t = about[locale] || about.hr;

  return (
    <Box component="section" className={classes.wrap}>
      {/* <div className={classes.sectionGrid} aria-hidden="true" />
      <div className={classes.bgLines} aria-hidden="true" /> */}

      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.head} data-aos="fade-up">
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary.main">
              {t.eyebrow}
            </Typography>

            <Typography variant="h2" color="text.primary">
              {t.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" className={classes.lead}>
              {t.lead}
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {t.blocks.map((block, index) => (
            <Grid key={block.key} size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay={index * 90}>
              <Card variant="projectCard" className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <div className={classes.topLine} aria-hidden="true" />

                  <Stack spacing={2.25} className={classes.cardStack}>
                    <Box className={classes.cardTop}>
                      <Typography variant="overline" color="secondary.main">
                        {block.key}
                      </Typography>

                      <Box className={classes.iconWrap} aria-hidden="true">
                        {block.icon}
                      </Box>
                    </Box>

                    <Stack spacing={1.25} className={classes.cardBody}>
                      <Typography variant="h4" color="text.primary">
                        {block.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {block.text}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
