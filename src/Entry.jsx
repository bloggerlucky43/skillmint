import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import EachCourse from "./pages/dashboard/courses/eachcourse";
const Entry = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/en/dashboard" element={<Dashboard />} />
        <Route path="/en/profile" element={<Profile />} />
        <Route path="/en/learn/course" element={<EachCourse />} />
        <Route path="*" />
      </Routes>
    </Router>
  );
};

export default Entry;
