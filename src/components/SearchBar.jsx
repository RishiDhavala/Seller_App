import React, { useState } from "react";
import styled from "styled-components";
const Searchbar = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 10rem;
  padding-left: 20px;
  font-size: 16px;
  border:none;
  box-shadow:1px 1px 1px 1px #e0e0d1;
`;

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div
      className="search"
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Searchbar type="text" value={query} onChange={handleInputChange} />
      <button
        onClick={handleSearch}
        style={{
          backgroundColor: "#0063cc",
          color: "white",
          borderRadius: "5rem",
          width: "80px",
          height: "40px",
          cursor: "pointer",
          border:'none',
          
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
