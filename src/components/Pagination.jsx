import * as React from "react";
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const style = {
    backgroundColor: "white",

    borderRadius: "10px",
  };

  return (
    <Pagination
      page={page}
      count={10}
      style={style}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default Content;

// export default function PaginationLink() {
//   return (
//     <MemoryRouter initialEntries={['/page']} initialIndex={0}>
//       <Routes>
//         <Route path="/" element={<Content />} />
//       </Routes>
//     </MemoryRouter>
//   );
// }
