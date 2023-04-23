import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Contacts from "./Contacts";

export default function MessagePopup({ message, from }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message && from ) {
      setIsOpen(true);
      const timer = setTimeout(() => setIsOpen(false), 3000); // close popup after 3 seconds
      return () => clearTimeout(timer);
    
    }
  }, [message, from]);

  return isOpen ? (
    <Popup>

      <span>{from ? ` ${from} enviou:` : "Unknown sender"}</span>
      <p>{message}</p>
    </Popup>
  ) : null;
}

const Popup = styled.div`
  position: fixed;
  bottom: 170px;
  right: 160px;
  color: white;
  background-color: #793a6e;
  border: 1px solid #b591b6;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: slide-in 0.5s forwards;

  @keyframes slide-in {
    from {
      right: -500px;
    }
    to {
      right: 160px;
    }
  }
`;


