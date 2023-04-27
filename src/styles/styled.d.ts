import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string;
      black: string;
      white: string;
      gray: string;
      darkGray: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  }
}
