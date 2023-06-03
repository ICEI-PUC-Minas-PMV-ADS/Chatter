import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/chatterlet.png";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
  
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "A senha e a senha de confirmação devem ser iguais.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "O nome de usuário deve ter mais de 3 caracteres.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "A senha deve ser igual ou maior que 8 caracteres.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email é obrigatório.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <>
    <RectBackground>
      <svg viewBox="0 0 900 450" width="1vw" height="1vh">
      <rect fill="#F5F5F5" x="-10%" y="0" width="50%" height="100%" />
      </svg>
      </RectBackground>
      <WaveBackground>
      <svg viewBox="0 0 900 450" width="1vw" height="1vh">
          <path d="M477 0L486.8 10.7C496.7 21.3 516.3 42.7 515.8 64.2C515.3 85.7 494.7 107.3 494.2 128.8C493.7 150.3 513.3 171.7 513.8 193C514.3 214.3 495.7 235.7 464.5 257C433.3 278.3 389.7 299.7 363.3 321.2C337 342.7 328 364.3 326.2 385.8C324.3 407.3 329.7 428.7 332.3 439.3L335 450L0 450L0 439.3C0 428.7 0 407.3 0 385.8C0 364.3 0 342.7 0 321.2C0 299.7 0 278.3 0 257C0 235.7 0 214.3 0 193C0 171.7 0 150.3 0 128.8C0 107.3 0 85.7 0 64.2C0 42.7 0 21.3 0 10.7L0 0Z" fill="#F5F5F5" stroke-linecap="round" stroke-linejoin="miter"></path>
      </svg>
      </WaveBackground>
      <ImagesLogo>
        <img src={Logo1} alt="logo" />
        <img src={Logo2} alt="logo" style={{ width: '50%', height: 'auto' }} />
      </ImagesLogo>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
          <img src={Logo} alt="logo" style={{ width: '50%', height: 'auto' }} />
          </div>
          <text style={{fontWeight:'bold', color:'#37266B', textAlign: 'center'}}> Crie sua conta Chatter!</text>
          <input
            type="text"
            placeholder="Usuario"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Criar usuario</button>
          <span style={{marginLeft: '5rem',}}>
           Já tem uma conta? <Link to="/login"> Ir para Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: flex-start;
  padding-left: 15rem;
  background: linear-gradient(222.31deg, #00BCD4 -74.14%, #7870D0 26.26%, #8468D0 36.75%, #985BCF 53.23%);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 10rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #F5F5F5;
    border-radius: 2rem;
    padding: 3rem 5rem;
    z-index:100;
  }
  input {
    background-color: #DBC9EA;
    padding: 1rem;
    margin-left: 3rem;
    border: 0.1rem solid #997af0;
    border-radius: 0.4rem;
    color: #392E2D;
    width: 80%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #985BCF;
      outline: none;
    }
  }
  button {
    background-color: #985BCF;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    margin-left: 3rem;
    width: 80%;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #9592a0;
    }
  }
  span {
    color: #7a7979;
    text-transform: uppercase;
    a {
      color: #985BCF;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const WaveBackground = styled.div`
  position: absolute; 
  width: 100%;
  height: 100%;
  z-index: 0;
  left:20rem;
  rect{
    margin:0;
  }
  svg {
    width: 100%;
    height: 100%;
    right: 100rem;
  }
`;

const RectBackground = styled.div`
  position: absolute; 
  width: 100%;
  height: 100%;
  z-index: 0;
  svg {
    width: 100%;
    height: 100%;
    right: 100rem;
  }
`;

const ImagesLogo = styled.div`
  position: absolute; 
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 60rem;
  height: 100vh;
`;