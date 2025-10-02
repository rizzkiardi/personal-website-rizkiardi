import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import NProgress from "nprogress";
import "../styles/nprogress.css";

// Lazy load pages
const Home = lazy(() => import("@/components/pages/Home"));
const About = lazy(() => import("@/components/pages/About"));
const Projects = lazy(() => import("@/components/pages/Projects"));
const Contact = lazy(() => import("@/components/pages/Contact"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

// loader NProgress
const Loader = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
