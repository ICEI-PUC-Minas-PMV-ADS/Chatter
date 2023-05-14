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
        Olá, <span>{userName}!</span>
      </h1>
      <br></br>
      <h3>Selecione uma conversa para iniciar</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee6e6;
  flex-direction: column;
  h1, h3{
    color: #37266B ;
  }
  img {
    height: 20rem;
  }
  span {
    color: #37266B;
  }
`;
