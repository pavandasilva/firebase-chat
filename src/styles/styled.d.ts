import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      lightBackground: string;
      extraLightBackground: string;
      lightPrimary: string;
      danger: string;
      sucess: string;
      warn: string;
      primaryText: string;
      lazyLoading: string;
      lightText: string;
      divider: string;
    };
  }
}
