"use client";

import Link from "next/link";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";

import classes from "./HomeWorkPackages.module.css";

import workPackages from "./work-packages";

export default function HomeWorkPackages({ locale = "hr" }) {
  const t = workPackages[locale] || workPackages.hr;

  return (
    <Box component="section" className={classes.wrap}>
      <div className={classes.bgLines} aria-hidden="true" />

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
          {t.items.map((item, i) => (
            <Grid key={item.key} size={{ xs: 12, sm: 6, xl: 4 }} data-aos="fade-up" data-aos-delay={i * 70}>
              <Link href={item.href} className={classes.cardLink}>
                <Card variant="projectCard" className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.topLine} aria-hidden="true" />

                    <Stack spacing={2.25} className={classes.cardStack}>
                      <Box className={classes.cardTop}>
                        <Typography variant="overline" color="secondary.main">
                          {item.key}
                        </Typography>

                        <Box className={classes.iconWrap} aria-hidden="true">
                          {item.icon}
                        </Box>
                      </Box>

                      <Stack spacing={1.25} className={classes.cardBody}>
                        <Typography variant="h4" color="text.primary">
                          {item.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.text}
                        </Typography>
                      </Stack>

                      <Box className={classes.cardBottom}>
                        <Typography variant="nav" color="primary.main" component="span" className={classes.more}>
                          {t.more} →
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
