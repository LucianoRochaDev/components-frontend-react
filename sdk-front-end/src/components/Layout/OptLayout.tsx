import {
  createMuiTheme,
  LinearProgress,
  SwipeableDrawer,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core';
import React, { PropsWithChildren, Suspense, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { BreadcrumbProvider } from '../../contexts/breadcrumb/breadcrumbContext';
import { OptThemeProvider, useOptTheme } from '../../contexts/theme/themeContext';
import { LocalStorageKeys } from '../../shared/constants';
import GlobalStyles from '../../shared/styles/global';
import GlobalFontStyles from '../../shared/styles/globalFont';
import { Theme } from '../../shared/styles/theme';
import { OptMenuSection } from '../Drawer';
import { OptDrawerMenu } from '../Drawer/OptDrawerMenu';
import { OptSidebarMenu } from '../Drawer/OptSidebarMenu';
import { OptAppBar } from './OptAppBar';
import { OptUserProfile } from './OptAvatar';
import * as S from './styles';

const layoutTheme = createMuiTheme({
  palette: {
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        '&': {
          padding: 8,
        },
      },
    },
  },
});

export interface OptLayoutProps {
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  /** Disables the sidebar */
  noSidebar?: boolean;
  profile: OptUserProfile | undefined;
  onConfigurarPerfil: () => void;
  onLogout: () => void;
  onNotificationsClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onModulesClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const OptLayout = (props: PropsWithChildren<OptLayoutProps>) => {
  return (
    <BrowserRouter>
      <MaterialThemeProvider theme={layoutTheme}>
        <BreadcrumbProvider>
          <OptThemeProvider>
            <OptInnerLayout {...props} />
          </OptThemeProvider>
        </BreadcrumbProvider>
      </MaterialThemeProvider>
    </BrowserRouter>
  );
};

const OptInnerLayout = ({
  sections,
  routes,
  noSidebar = false,
  onConfigurarPerfil,
  profile,
  children,
  onLogout,
  onNotificationsClick,
  onModulesClick,
}: PropsWithChildren<OptLayoutProps>) => {
  const [dockedDrawer, setDockedDrawer] = useState(!!localStorage.getItem(LocalStorageKeys.DockedDrawer));
  const hasSidebar = !noSidebar && !dockedDrawer;
  const { currentTheme } = useOptTheme();

  if (routes && routes.type !== Switch) {
    console.error('Prop routes is not a Switch!');
  }

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  function toggleDockedDrawer() {
    if (!dockedDrawer) {
      localStorage.setItem(LocalStorageKeys.DockedDrawer, 'true');
      setDrawerOpen(false);
    } else {
      localStorage.removeItem(LocalStorageKeys.DockedDrawer);
      setDrawerOpen(true);
    }

    setDockedDrawer(!dockedDrawer);
  }

  return (
    <StyledComponentsThemeProvider theme={currentTheme}>
      <GlobalFontStyles />
      <GlobalStyles />

      <OptAppBar
        profile={profile}
        onConfigurarPerfil={onConfigurarPerfil}
        onLogout={onLogout}
        onNotificationsClick={onNotificationsClick}
        onModulesClick={onModulesClick}
        onDrawerOpen={handleDrawerOpen}
        hideDrawerButton={dockedDrawer}
      />

      <S.Container>
        {hasSidebar && <OptSidebarMenu sections={sections} />}
        {dockedDrawer && (
          <S.DockedDrawerContainer>
            <OptDrawerMenu sections={sections} onToggleDockDrawer={toggleDockedDrawer} docked />
          </S.DockedDrawerContainer>
        )}

        {children}

        {routes && (
          <Suspense
            fallback={
              <div style={{ flex: 1, marginTop: 1 }}>
                <LinearProgress color="secondary" />
                <LinearProgress color="primary" />
              </div>
            }>
            <S.ContentContainer>{routes}</S.ContentContainer>
          </Suspense>
        )}
      </S.Container>

      <SwipeableDrawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen}>
        <OptDrawerMenu sections={sections} onHideDrawer={handleDrawerClose} onToggleDockDrawer={toggleDockedDrawer} />
      </SwipeableDrawer>
    </StyledComponentsThemeProvider>
  );
};
