
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

let arr = Array.apply(null, Array(6)).map(function (y, i) {
  return i + 1;
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {arr.map((n, id) => {
          return <Route key={id} path={`?page=${n}`} element={<Home />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
