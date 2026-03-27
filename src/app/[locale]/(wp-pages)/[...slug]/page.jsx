import { fmtDate } from "@/functions/date";
import { wpFetch } from "@/lib/wpFetch";
import { PAGE_BY_PATH } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
import BlockRenderer from "@/components/BlockRenderer/BlockRenderer";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import classes from "./page.module.css";

export const revalidate = 300;

export default async function WpPage(props) {
  const { slug, locale } = await props.params;
  const segments = Array.isArray(slug) ? slug : [slug].filter(Boolean);
  const path = `/${segments.join("/")}/`;

  const pageData = await wpFetch(PAGE_BY_PATH, { path });
  const page = pageData?.page;

  if (!page) return notFound();

  const blocks = Array.isArray(page.blocks) ? page.blocks : typeof page.blocks === "string" ? JSON.parse(page.blocks) : [];

  const ancestors = page.ancestors?.nodes || [];
  const children = page.children?.nodes || [];
  const hasHero = !!page.featuredImage?.node?.sourceUrl;

  return (
    <Box component="article" className={classes.article}>
      <Container maxWidth="lg" className={classes.container}>
        <header className={classes.header}>
          <nav className={classes.breadcrumbs} aria-label="Breadcrumb">
            <Link href={`/${locale}`} className={classes.crumb}>
              <HomeIcon className={classes.homeIcon} />
            </Link>

            {ancestors
              .slice()
              .reverse()
              .map((ancestor) => (
                <span key={ancestor.id} className={classes.crumbRow}>
                  <span className={classes.sep}>/</span>

                  <Link href={ancestor.uri} className={classes.crumb}>
                    <Typography variant="body2" color="text.secondary" component="span">
                      {ancestor.title}
                    </Typography>
                  </Link>
                </span>
              ))}

            <span className={classes.crumbRow}>
              <span className={classes.sep}>/</span>

              <Typography variant="body2" color="text.primary" component="span" className={classes.crumbCurrent}>
                {page.title}
              </Typography>
            </span>
          </nav>

          <Typography variant="h1" color="text.primary" className={classes.title} data-aos="fade-up">
            {page.title}
          </Typography>

          {page.modified ? (
            <Box className={classes.meta} data-aos="fade-up" data-aos-delay="80">
              <Typography variant="overline" color="text.secondary">
                {locale === "hr" ? "Ažurirano" : "Updated"} {fmtDate(page.modified, locale)}
              </Typography>
            </Box>
          ) : null}
        </header>

        {hasHero ? (
          <Box className={classes.heroMedia} data-aos="fade-up" data-aos-delay="120">
            <Image
              src={page.featuredImage.node.sourceUrl}
              alt={page.featuredImage.node.altText || page.title}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 92vw"
              className={classes.heroImage}
            />
          </Box>
        ) : null}

        <Box className={classes.content} data-aos="fade-up" data-aos-delay={hasHero ? "180" : "120"}>
          {blocks.map((block, i) => (
            <BlockRenderer block={block} key={block?.clientId || i} />
          ))}
        </Box>

        {children.length ? (
          <section className={classes.subpages} data-aos="fade-up" data-aos-delay="140">
            <Typography variant="h3" color="text.primary" className={classes.subpagesTitle}>
              {locale === "hr" ? "Podstranice" : "Subpages"}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {children.map((child) => (
                <Grid key={child.id} size={{ xs: 12, md: 6 }}>
                  <Link href={child.uri} className={classes.subpageLink}>
                    <Card variant="projectCard" className={classes.subpageCard}>
                      <CardContent className={classes.subpageContent}>
                        <div className={classes.topLine} aria-hidden="true" />

                        <Stack spacing={0.5} className={classes.subpageText}>
                          <Typography variant="overline" color="secondary.main">
                            {locale === "hr" ? "Podstranica" : "Subpage"}
                          </Typography>

                          <Typography variant="h4" color="text.primary">
                            {child.title}
                          </Typography>
                        </Stack>

                        <Typography variant="nav" color="primary.main" component="span" className={classes.subpageArrow}>
                          →
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </section>
        ) : null}
      </Container>
    </Box>
  );
}
