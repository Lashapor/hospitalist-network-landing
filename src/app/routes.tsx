import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);
