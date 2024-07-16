import Home from "./../pages/Home";
import Products from "./../pages/Products";
import About from "./../pages/About";
import Contact from "../pages/Contact";

const pageInfo = {
  aboutUs:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore vero illo! Obcaecati quisquam, eum aspernatur quia perspiciatis necessitatibus alias cum deleniti illum aperiam assumenda quo voluptatibus! Eos, nulla doloremque!",
  ourMission:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita illo neque totam animi officiis. Iste, at quibusdam cupiditate modi natus minima quod, animi temporibus neque ea a dignissimos veniam eum.",
};

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About {...pageInfo} /> },
  { path: "/contact", element: <Contact /> },
];
