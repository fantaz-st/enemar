"use client";

import Link from "next/link";
import { Typography, Card, CardActionArea, CardContent, Box } from "@mui/material";
import dayjs from "dayjs";
import classes from "./PostCard.module.css";

export default function PostCard({ slug, title, date, excerpt, locale = "hr" }) {
  const base = locale === "hr" ? "/hr/novosti" : "/en/news";

  const cleanExcerpt = excerpt
    ?.replace(/<[^>]+>/g, "")
    ?.replace(/&hellip;/g, "...")
    ?.trim();

  return (
    <Card variant="projectCard" className={classes.card}>
      <CardActionArea component={Link} href={`${base}/${slug}`} className={classes.action}>
        <CardContent className={classes.content}>
          <div className={classes.topLine} aria-hidden="true" />

          <Box className={classes.top}>
            <Typography variant="overline" color="secondary.main">
              {date ? dayjs(date).format(locale === "hr" ? "D. M. YYYY." : "D MMM YYYY") : ""}
            </Typography>
          </Box>

          <Typography variant="h4" color="text.primary" className={classes.title}>
            {title}
          </Typography>

          {cleanExcerpt ? (
            <Typography variant="body2" color="text.secondary" className={classes.excerpt}>
              {cleanExcerpt}
            </Typography>
          ) : null}

          <Typography variant="nav" color="primary.main" component="span" className={classes.readMore}>
            {locale === "hr" ? "Pročitaj više" : "Read more"}
            <span className={classes.arrow}>→</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
