import Wellcome from "./Page/Wellcom";
import NotFound from "./Page/NotFoundPage";
import Profile from "./Components/Profile";
import Secret from "./Page/Secret";

export const privateRouters = [
  { path: "/profile", exact: true, component: Profile },
  { path: "/secret", exact: true, component: Secret }
];

export const publicRoutes = [
  { path: "/", exact: true, component: Wellcome },
  { path: "/", exact: true, component: NotFound }
];
