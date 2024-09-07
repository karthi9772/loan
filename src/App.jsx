import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page from "./Page";
import data from "./data.json";

const App = () => {
  return (
    <Router>
      <div className="">
        <ul className="flex justify-start space-x-4">
          {data.pages.map((page) => (
            <li key={page.slug}>
              <Link to={`/${page.slug}`} className="text-blue-500 ">
                {page.title}
              </Link>
            </li>
          ))}
        </ul>

        <Routes>
          {data.pages.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<Page data={page} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
