import React from "react";
import io from "socket.io-client";
import "./styles.css";

const CONNECTION_URL = "wss://api.dev.stories.studio/";

const connectSocket = () => {
    const socket = io(CONNECTION_URL, {
        transport: ["websocket"],
        path: "/interview-test"
    });
    socket.onAny((...args) => {
        console.log(...args);
    });

    return socket;
};

const App = () => {
    return <div>JOIN Interview </div>;
};

export default App;
