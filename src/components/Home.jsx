import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Search from "./SearchBar";
import carData from "../carData.json";
import Content from "./Pagination";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 40px;
`;
const CarContainer = styled.div`
  display: flex;
  gap: 0%;

  justify-content: space-between;
  margin: auto;
`;

const CarRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 85%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Pagination=styled.div`
margin:auto;
`
const ITEMS_PER_PAGE = 6;
const CARS_PER_ROW = 3;
const TOTAL_PAGES = Math.ceil(36 / ITEMS_PER_PAGE);

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState(carData);

  const handleSearch = (query) => {
    const filteredResults = carData.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filteredResults);
    //setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedCars = filteredCars.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const rows = [];
  for (let i = 0; i < displayedCars.length; i += CARS_PER_ROW) {
    rows.push(displayedCars.slice(i, i + CARS_PER_ROW));
  }

  return (
    <Container>
      <Search onSearch={handleSearch} />
      <CarRow>
        {rows.map((row, id) => (
          <CarContainer key={id}>
            {row.map((car, id) => (
              <Card key={id} props={car} />
            ))}
          </CarContainer>
        ))}
      </CarRow>
<Pagination>
      <Content />
      </Pagination>
    </Container>
  );
};

export default Home;
