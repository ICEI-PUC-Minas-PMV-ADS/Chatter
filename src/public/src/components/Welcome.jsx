import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Bem vindo, <span>{userName}!</span>
      </h1>
      <br></br>
      <h3>Selecione uma conversa para inicar</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee6e6;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #37266B;
  }
`;
