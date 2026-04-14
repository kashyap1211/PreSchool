import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { path } from "./constant.js";
import { ContactPage } from "./Pages/ContactPage";
import { ServicePage } from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import { HomePage } from "./Pages/HomePage";
import Landing from "./Pages/Landing.jsx";
import { ClassPage } from "./Pages/ClassPage.jsx";
import { EventPage } from "./Pages/EventPage.jsx";
import { BlogPage } from "./Pages/BlogPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<Landing />} />
        <Route path={path.about} element={<Landing screen={<AboutPage />} />} />
        <Route path={path.contact} element={<Landing screen={<ContactPage />} />} />
        <Route path={path.service} element={<Landing screen={<ServicePage />} />} />
        <Route path={path.class} element={<Landing screen={<ClassPage />} />} />
        <Route path={path.events} element={<Landing screen={<EventPage />} />} />
        <Route path={path.blog} element={<Landing screen={<BlogPage />} />} />
        <Route path={path.about} element={<Landing screen={<AboutPage />} />} />




      </Routes>
    </Router>
  );
}

export default App;