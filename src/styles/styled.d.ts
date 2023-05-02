import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      darkGray: string;
      gray: string;
      green: string;
      white: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  }
}
