import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Github from "../assets/github";
import Linkedin from "../assets/linkedin";
import Mail from "../assets/mail";
import { theme } from "../config/theme";
import { emailId, githubUrl, linkedinUrl } from "../constants/Common";

const Header: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation(['home']);

  return (
    <Box id='header' sx={styles.root}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={styles.container}>
          <Typography sx={styles.title}>{t('title')}</Typography>
          <Box sx={styles.links}>
            <Typography component='a' href={'#home'} sx={styles.link}>{t('home')}</Typography>
            <Typography component='a' href={'#about'} sx={styles.link}>{t('about')}</Typography>
            <Typography component='a' href={'#experience'} sx={styles.link}>{t('experience')}</Typography>
            <Typography component='a' href={'#projects'} sx={styles.link}>{t('projects')}</Typography>
            <Typography component='a' href={'#research'} sx={styles.link}>{t('research')}</Typography>
            <Typography component='a' href={'#contact'} sx={styles.link}>{t('contact')}</Typography>
          </Box>
          <Box sx={styles.icons}>
            <IconButton color="inherit" onClick={() => window.open(linkedinUrl)}>
              <Linkedin />
            </IconButton>
            <IconButton color="inherit" onClick={() => window.open(githubUrl)}>
              <Github />
            </IconButton>
            <IconButton color="inherit" onClick={() => window.open(`mailto:${emailId}`)}>
              <Mail />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const useStyles = () => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.primary.main
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    ...theme.typography.h3,
    color: theme.palette.common.black,
  },
  links: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifySelf: "center",
    alignSelf: "center",
    gap: theme.spacing(10)
  },
  link: {
    ...theme.typography.button,
    color: theme.palette.common.black,
    textDecoration: "none",
    textTransform: "none",
  } as React.CSSProperties,
  icons: {
    gap: theme.spacing(4)
  },
});

export default Header;
