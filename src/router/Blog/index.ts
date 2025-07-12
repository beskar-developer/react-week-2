import { lazyRoute } from "@shared-vendor/helpers";

import ROUTES from "@/constants/Blog/Router.constant";

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT_PATH,
    lazy: lazyRoute(() => import("@/views/Blog/Root/BlogRoot.view")),
    children: [
      {
        index: true,
        loader: () => redirect(ROUTES.HOME_PATH),
      },
      {
        path: ROUTES.HOME_PATH,
        lazy: lazyRoute(() => import("@/views/Blog/Home/BlogHome.view")),
      },
      {
        path: ROUTES.ABOUT_US_PATH,
        lazy: lazyRoute(() => import("@/views/Blog/AboutUs/BlogAboutUs.view")),
      },
      {
        path: ROUTES.POST_PATH,
        lazy: lazyRoute(() => import("@/views/Blog/Post/BlogPost.view")),
      },
    ],
  },
];

export default routes;
