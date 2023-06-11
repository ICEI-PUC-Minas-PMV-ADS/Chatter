import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUser] = useState({});
  const [chatsFromUser, setChats ] = useState([]);

  const setAuthenticatedUser = (id) => {
    setUser(id);
  };

  const setChatsFromUser = (data) => {
    setChats(data);
  };

  return (
    <AuthContext.Provider value={{ userAuthenticated, chatsFromUser, setAuthenticatedUser, setChatsFromUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
