import "./App.css";
import HttpCall from "./Components/HttpCall";
import WebSocketCall from "./Components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Webcams from "./Components/Webcam";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
      const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });

      setSocketInstance(socket);

      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
  }, []);

  return (
    <Webcams/>
    // <div className="App">
    //   <h1>React/Flask App + socket.io</h1>
    //   <div className="line">
    //     <HttpCall />
    //   </div>
    //   {!buttonStatus ? (
    //     <button onClick={handleClick}>turn chat on</button>
    //   ) : (
    //     <>
    //       <button onClick={handleClick}>turn chat off</button>
    //       <div className="line">
    //         {!loading && <WebSocketCall socket={socketInstance} />}
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}

export default App;