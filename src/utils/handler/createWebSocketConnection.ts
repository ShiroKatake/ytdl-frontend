import { hostname } from "./hostname";

export const createWebSocketConnection = () => {
  const websocketProtocol = window.location.hostname === "localhost" ? "ws" : "wss";
  return new WebSocket(`${hostname.replace(/^https?/i, websocketProtocol)}`);
}
