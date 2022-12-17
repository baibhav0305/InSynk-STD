import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  height: 348px;
  width: 282px;
  border: 1px solid #e1e3e6;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`;

const Rating = styled.div`
  background-color: white;
  position: absolute;
  top: 14px;
  left: 14px;
  border-radius: 50%;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  border: 2px solid #000000;
`;

const Image = styled.img`
  width: 280px;
  height: 302px;
  border-radius: 7px 7px 0px 0px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 17px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MovieCard = ({ data, link }) => {
  return (
    <Card>
      <Rating>{data.vote_average}</Rating>
      <Image src={`https://image.tmdb.org/t/p/original/${link}`} alt="poster" />
      <Title>{data.title || data.original_title || data.original_name}</Title>
    </Card>
  );
};

export default MovieCard;
