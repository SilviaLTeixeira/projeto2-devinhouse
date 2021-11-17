export const URL_SERVER =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3333"
    : "https://sgi-projeto-server.herokuapp.com";
