"use client";

import site from "@/settings/site";
import classes from "./Footer.module.css";
import Link from "next/link";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer({ menuItems = [], locale = "hr" }) {
  const topLevelLinks = menuItems || [];
  const externalLinks = site.footer?.links || [];
  const projectTitle = site.project?.acronym || site.name;

  return (
    <Box component="footer" className={classes.wrap}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={{ xs: 4, md: 5 }} className={classes.top}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.25} className={classes.brand}>
              <Typography variant="brand" color="primary.main">
                {projectTitle}
              </Typography>

              <Typography variant="body1" color="text.secondary" className={classes.brandText}>
                {site.footer?.summary?.text?.[locale]}
              </Typography>

              <Box className={classes.euLogos}>
                <Image src={locale === "hr" ? "/images/funded-eu-hr.svg" : "/images/funded-eu-en.svg"} alt="EU" width={150} height={30} className={classes.euLogo} />
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Stack spacing={1.25}>
              <Typography variant="overline" color="secondary.main">
                {locale === "hr" ? "Projekt" : "Project"}
              </Typography>

              <div className={classes.colLinks}>
                {topLevelLinks.map((item) => (
                  <Link key={item.databaseId} href={item.uri} className={classes.link}>
                    <Typography variant="body2" color="text.secondary" component="span">
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </div>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Stack spacing={1.25}>
              <Typography variant="overline" color="secondary.main">
                {locale === "hr" ? "Poveznice" : "Links"}
              </Typography>

              <div className={classes.colLinks}>
                {externalLinks.map((item, index) => (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <Typography variant="body2" color="text.secondary" component="span">
                      {item.label}
                    </Typography>
                  </a>
                ))}
              </div>
            </Stack>
          </Grid>
        </Grid>

        <div className={classes.bottom}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {locale === "hr" ? site.footer?.copyright?.owner?.hr : site.footer?.copyright?.owner?.en}.{" "}
            {locale === "hr" ? "Sva prava pridržana." : "All rights reserved."}
          </Typography>

          <div className={classes.bottomLinks}>
            <Link href={locale === "hr" ? "/hr/politika-privatnosti" : "/en/privacy-policy"} className={classes.bottomLink}>
              <Typography variant="body2" color="text.secondary" component="span">
                {locale === "hr" ? "Politika privatnosti" : "Privacy Policy"}
              </Typography>
            </Link>

            <Link href={locale === "hr" ? "/hr/impressum" : "/en/imprint"} className={classes.bottomLink}>
              <Typography variant="body2" color="text.secondary" component="span">
                {locale === "hr" ? "Impressum" : "Imprint"}
              </Typography>
            </Link>
          </div>
        </div>
      </Container>
    </Box>
  );
}
