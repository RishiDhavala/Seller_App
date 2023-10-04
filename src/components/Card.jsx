import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CarCard = styled.div`
  width: 29%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color:  #e6f2ff;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px  #d9d9d9;

  gap: 5px;
  border:1px solid white
`;
const CarImg = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 10px;
`;

const CarProps = styled.div`
display:flex;
flex-direction:column;
.name{
    display:flex;
    justify-content:space-between;
    align-items:center;
    
}

h4{
    border:3px dotted #c7d1f9;
    border-radius:3em;
    padding:5px;

}}

.chars{
    display:flex;
   
    gap:55px;
    .chars1{
        display:flex;
        gap:5px;
          flex-direction:column;
        
    }
    .chars2{
        display:flex;
        gap:5px;
          flex-direction:column;
        
    }
}
`;

const CarFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeButton = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #c7d1f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const RentButton = styled.div`
  width: 80px;
  height: 35px;
  background-color: #0063cc;
  color: white;

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img``;

const Card = ({ props }) => {
  return (
    <CarCard props={props}>
      <CarImg src={props.image} />
      <CarProps props={props}>
        <div className="name">
          <h3>{props.name}</h3> <h4>{props.year}</h4>
        </div>
        <div className="chars">
          <div className="chars1">
            {props.chars1.map((char, id) => {
              return (
                <div key={id} style={{ display: "flex", gap: "10px" }}>
                  <Icon src={char.icon} /> {char.value}
                </div>
              );
            })}
          </div>

          <div className="chars2">
            {props.chars2.map((char, id) => {
              return (
                <div key={id} style={{ display: "flex", gap: "10px" }}>
                  <Icon src={char.icon} /> {char.value}
                </div>
              );
            })}
          </div>
        </div>
      </CarProps>
      <hr
        style={{
          background: "#bfbfbf",
          height: "1px",
          border: "none",
          width: "100%",
        }}
      />
      <CarFooter>
        <h3>{props.price}</h3>
        <ButtonGroup>
          <LikeButton>
            <FavoriteBorderIcon color="primary"/>
          </LikeButton>
          <RentButton>Rent Now</RentButton>
        </ButtonGroup>
      </CarFooter>
    </CarCard>
  );
};

export default Card;
