import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useLocation } from "react-router";
import ScrollToTop from "./components/ui/ScrollToTop";
import { Toaster } from "./components/ui/sonner";
import AppRoutes from "./routes/AppRoutes";
import "./styles/nprogress.css";

NProgress.configure({
  speed: 500,
  trickleSpeed: 500,
  // minimum: 1,
  showSpinner: false,
});

function App() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
