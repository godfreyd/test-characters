import "@emotion/react";
import { ITheme } from "../src/components/Theme/index.props";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
