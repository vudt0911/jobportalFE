import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import PageExample from "@/pages/sample";
import PageProfile from "@/pages/profile";
import { IRoutes } from "@/routers/route.type";

const publicRoutes: IRoutes[] = [
  {
    path: "/example",
    component: PageExample,
    hasLayout: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/profile",
    component: PageProfile,
  },
];

export { publicRoutes };
