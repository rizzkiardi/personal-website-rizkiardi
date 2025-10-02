import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import App from "./App.jsx";
import PreLoader from "./components/ui/PreLoader";
import "./index.css";
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PreLoader />
      <App />
    </BrowserRouter>
  </StrictMode>
);
