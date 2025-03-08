import RootNavigation from './navigation/rootNavigation';
import { theme } from './config/theme';
import { ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        {/* <ThemeProvider theme={theme}> */}
          <RootNavigation />
        {/* </ThemeProvider> */}
      </I18nextProvider>
        
    </>
  );
}

export default App;
