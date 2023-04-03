import React, { useRef, useState } from 'react';
import io from 'socket.io-client';
import InputMask from 'react-input-mask';
import style from './Join.module.css';
import { Input, Button } from '@mui/material';

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [code, setCode] = useState('');

//   const handlePhoneChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Implementar a lógica de autenticação aqui
//   };

//   return (
//     <body className={style.body} >
//     <div className={style.container}>
//       <h2 className={style.title}>Login</h2>
//       <form onSubmit={handleSubmit} className={style.form}>
//         <div>
//           <label htmlFor="phone" className={style.label}>
//             Telefone:
//           </label>
//           <InputMask
//             mask="(99) 99999-9999"
//             type="tel"
//             id="phone"
//             name="phone"
//             value={phoneNumber}
//             onChange={handlePhoneChange}
//             className={style.input}
//           />
//         </div>
//         <div>
//           <label htmlFor="code" className={style.label}>
//             Código:
//           </label>
//           <InputMask
//             mask="9999"
//             maskChar=" "
//             id="code"
//             name="code"
//             value={code}
//             onChange={handleCodeChange}
//             className={style.input}
//           />        
//         </div>
//         <div className={style.register}>
//             <a >Não possui login? Registre-se aqui!</a>
//           </div>
//         <button type="submit" className={style.button}>
//           Entrar
//         </button>
//       </form>
//     </div>
//     </body>
//   );
// };

// export default Login;




export default function Join({setChatVisibility, setSocket}) {

  const usernameRef = useRef()

  const handleSubmit = async () => {
    const username = usernameRef.current.value
    if(!username.trim()) return
    const socket = await io.connect('http://localhost:4000')
    socket.emit('set_username', username)
    setSocket(socket)
    setChatVisibility(true)
  }

  return (
    <div className={style['join-container']}>
      <h2>Chat </h2>
      <Input inputRef={usernameRef} placeholder='Digite seu nome' />
      <Button sx={{mt:2}} onClick={()=>handleSubmit()} variant="contained">Entrar</Button>
    </div>
  )
}
