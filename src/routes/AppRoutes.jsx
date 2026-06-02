import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import Home from "@/components/pages/Home";

NProgress.configure({
  speed: 500,
  trickleSpeed: 500,
  showSpinner: false,
});

// const Home = React.lazy(() => import("@/components/pages/Home"));
const About = React.lazy(() => import("@/components/pages/About"));
const Projects = React.lazy(() => import("@/components/pages/Projects"));
const Contact = React.lazy(() => import("@/components/pages/Contact"));
const NotFound = React.lazy(() => import("@/components/pages/NotFound"));

const Loader = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

const LazyPage = ({ children }) => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return children;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}

        <Route
          path="/"
          element={
            <LazyPage>
              <Home />
            </LazyPage>
          }
        />
        <Route
          path="/about"
          element={
            <LazyPage>
              <About />
            </LazyPage>
          }
        />
        <Route
          path="/projects"
          element={
            <LazyPage>
              <Projects />
            </LazyPage>
          }
        />
        <Route
          path="/contact"
          element={
            <LazyPage>
              <Contact />
            </LazyPage>
          }
        />
        <Route
          path="*"
          element={
            <LazyPage>
              <NotFound />
            </LazyPage>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
