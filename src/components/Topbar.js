import React from "react";
import styled from "styled-components";

const TopbarCont = styled.div`
  height: 77px;
  /* width: 1200px; */
  /* background-color: cadetblue; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #c0c4cc;
`;

const LogoCont = styled.div`
  /* padding-top: 11px; */
  /* padding-left: 121px; */
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const LogoImg = styled.img`
  border-radius: 10px;
  background-color: black;
  /* width: 50%; */
  height: 54px;
`;

const InputCont = styled.div`
  border: 1px solid #c0c4cc;
  border-radius: 2px;
  padding-left: 10px;
`;

const Icon = styled.i`
  height: 16px;
  width: 16px;
  color: #898e9a;
  font-size: 12px;
  /* margin-right: 10px; */
`;

const Input = styled.input`
  background: transparent;
  padding-left: 10px;
  height: 36px;
  width: 80%;
  color: #898e9a;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  border: none;
  outline: none;
`;

const Topbar = () => {
  return (
    <div>
      <TopbarCont>
        <LogoCont>
          <LogoImg src="logo.png" alt="logo" />
        </LogoCont>
        <InputCont>
          <Icon className="fa-solid fa-magnifying-glass"></Icon>
          <Input placeholder="Search for a movie" />
        </InputCont>
      </TopbarCont>
    </div>
  );
};

export default Topbar;
