import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoadingPage from "../pages/LoadingPage";

// Lazy loading example pages
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage message="Loading Home…" />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingPage message="Loading About…" />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "loading-demo",
        element: <LoadingPage message="This is the loading page" />,
      },
    ],
  },
]);
