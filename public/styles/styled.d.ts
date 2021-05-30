import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      info: string;
      error: string;
    };
  }
}
