import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function App() {
  return (
    <>
      <div id="sidebar">
        <h1>Node.js & React Test Project</h1>
        <nav>
          <a href={`/about`}>About</a>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
