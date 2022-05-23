import { hostname } from "./hostname";

export const createWebSocketConnection = () => {
  const websocketProtocol = window.location.hostname === "localhost" ? "ws" : "wss";
  return new WebSocket(`${hostname.replace(/^https?/i, websocketProtocol)}`);
};

export const sendMessage = async (socket: WebSocket, message: string) => {
  if (socket.readyState !== socket.OPEN) {
    try {
      await waitForOpenConnection(socket);
      socket.send(message);
    } catch (err) {
      console.error(err);
    }
  } else {
    socket.send(message);
  }
};

const waitForOpenConnection = (socket: WebSocket) => {
  return new Promise((resolve, reject) => {
    const maxNumberOfAttempts = 10;
    const intervalTime = 200; //ms

    let currentAttempt = 0;
    const interval = setInterval(() => {
      if (currentAttempt > maxNumberOfAttempts - 1) {
        clearInterval(interval);
        reject(new Error("Maximum number of attempts exceeded"));
      } else if (socket.readyState === socket.OPEN) {
        clearInterval(interval);
        resolve(() => {});
      }
      currentAttempt++;
    }, intervalTime);
  });
};
