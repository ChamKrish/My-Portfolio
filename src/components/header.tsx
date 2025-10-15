import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Github from "../assets/svg/github";
import Linkedin from "../assets/svg/linkedin";
import Mail from "../assets/svg/mail";
import { theme } from "../config/theme";
import { scrollToElement } from "../config/utils";
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
            <Typography onClick={() => scrollToElement('home')} sx={styles.link}>{t('home')}</Typography>
            <Typography onClick={() => scrollToElement('about')} sx={styles.link}>{t('about')}</Typography>
            <Typography onClick={() => scrollToElement('experience')} sx={styles.link}>{t('experience')}</Typography>
            {/* <Typography onClick={() => scrollToElement('coming-soon')} sx={styles.link}>{t('projects')}</Typography>
            <Typography onClick={() => scrollToElement('coming-soon')} sx={styles.link}>{t('research')}</Typography>
            <Typography onClick={() => scrollToElement('coming-soon')} sx={styles.link}>{t('contact')}</Typography> */}
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
    width: 1,
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
    left: '45%',
    gap: theme.spacing(10)
  },
  link: {
    ...theme.typography.button,
    color: theme.palette.common.black,
    textDecoration: "none",
    textTransform: "none",
    cursor: 'pointer'
  } as React.CSSProperties,
  icons: {
    gap: theme.spacing(4)
  },
});

export default Header;
