interface IBreakpoints {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

type BreakpointName = keyof IBreakpoints;

interface IBreakpointsTheme {
  values: IBreakpoints;
  up: (breakpoint: BreakpointName) => string;
  under: (breakpoint: BreakpointName) => string;
}

export interface ITheme {
  breakpoints: IBreakpointsTheme;
}
