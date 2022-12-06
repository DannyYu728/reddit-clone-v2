import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

function Messages({
  currentRoom,
  sendMessage,
  setToggleChat,
  setShowChat,
  textContainer,
  showUsers
}) {
  const [msg, setMsg] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    textContainer.current.scrollTop = textContainer.current.scrollHeight + 100;
  }, [currentRoom]);
  return (
    <div className="messages-container">
      <div className="messages-text-container" ref={textContainer}>
        {currentRoom.messages.map((msg, i) => {
          return Array.isArray(msg) ? (
            <p key={i} className="sent-from-me">
              {user.username}: {msg[0]}
            </p>
          ) : (
              <p key={i}>{showUsers[0].username}: {msg}</p>
          );
        })}
      </div>
      <form
        className="messages-form"
        onSubmit={(e) => {
          sendMessage(e, msg, currentRoom);
          setMsg("");
        }}
      >
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Messages;
