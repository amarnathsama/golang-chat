var socket = new WebSocket("ws://localhost:9000/ws");
let connect = (cb) => {
  console.log("conecting");

  socket.onopen = () => {
    console.log("successfully connected");
  };

  socket.onmessage = (msg) => {
    console.log("message from websocket", msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("socket closed connection");
  };

  socket.error = (error) => {
    console.log("socket error", error);
  };
};

let sendMsg = (msg) => {
  console.log("sending msg:", msg);
  socket.send(JSON.stringify(msg));
};

export { connect, sendMsg };
