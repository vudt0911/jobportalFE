export interface IRoutes {
  path: string;
  component: () => JSX.Element;
  hasLayout?: boolean; // true false header or footer layout
}
