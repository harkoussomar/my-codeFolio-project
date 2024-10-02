import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/header/Header";
import BlogDetails from "./components/blog/blogDetails/BlogDetails";

// Lazy loading the components
const Home = lazy(() => import("./components/home/Home"));
const Work = lazy(() => import("./components/work/Work"));
const WorkDetails = lazy(() =>
  import("./components/work/workDetails/WorkDetails")
);
const Blog = lazy(() => import("./components/blog/Blog"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Suspense>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate replace to="/" />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:param" element={<WorkDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:param" element={<BlogDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
