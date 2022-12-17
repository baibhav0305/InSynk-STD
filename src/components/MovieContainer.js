import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  margin-top: 37px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

const MovieCardCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 23px;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  height: 474px;
  width: 583px;
  margin: auto;
  background-color: white;
  padding: 20px 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 90%;
    height: 90%;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleModal = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Icon = styled.p`
  border: 1px black solid;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Movie = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 389px;
  width: 266px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const Details = styled.div`
  padding: 0 0 0 22px;
  height: 380px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Text = styled.p`
  margin-bottom: 16px;
`;

const MovieContainer = () => {
  const [movieData, setMovieData] = useState();

  const handleClose = () => {
    document.getElementById("modal").style.display = "none";
  };

  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {
    const getRecentMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      );

      if (res) {
        setRecentMovies(res.data.results);
      }
    };

    getRecentMovies();
  }, []);

  return (
    <Wrapper>
      <Title>Most Recent Movies</Title>
      <MovieCardCont>
        {recentMovies &&
          recentMovies.map((movie) => {
            return (
              <div
                onClick={() => {
                  document.getElementById("modal").style.display = "block";
                  setMovieData(movie);
                }}
                key={movie.id}
              >
                <MovieCard data={movie} link={movie.poster_path} />
              </div>
            );
          })}
      </MovieCardCont>
      <ModalWrapper id="modal">
        {movieData && (
          <Modal>
            <Top>
              <TitleModal>
                {movieData.original_title || movieData.original_name}
              </TitleModal>
              <Icon onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
              </Icon>
            </Top>
            <Movie>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                alt="modal"
              />
              <Details>
                <Text>
                  <b>Release Date:</b>{" "}
                  {movieData.release_date || movieData.first_air_date}
                </Text>
                <Text>{movieData.overview}</Text>
                <Text>
                  <b>{movieData.vote_average}</b> / 10 ({movieData.vote_count}{" "}
                  total votes)
                </Text>
              </Details>
            </Movie>
          </Modal>
        )}
      </ModalWrapper>
    </Wrapper>
  );
};

export default MovieContainer;
