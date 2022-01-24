import { host } from "./hostname";

export const createWebSocketConnection = () => {
  const websocketProtocol = window.location.hostname === "localhost" ? "ws" : "wss";
  return new WebSocket(`${host.replace(/^https?/i, websocketProtocol)}`);
}
