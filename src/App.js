import React from "react";
import styled from "styled-components";
import MovieContainer from "./components/MovieContainer";
import Topbar from "./components/Topbar";

const Parent = styled.div`
  background-color: white;
  z-index: -1;
`;

const AppCont = styled.div`
  width: 79%;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  return (
    <Parent id="parent">
      <AppCont>
        <Topbar />
        <MovieContainer />
      </AppCont>
    </Parent>
  );
};

export default App;
