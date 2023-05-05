import Homepage from "@/pages/homepage";
import { IRoutes } from "@/routers/route.type";
const privateRoutes: IRoutes[] = [
  {
    path: "/",
    component: Homepage,
    hasLayout: true,
  },
];

export { privateRoutes };
