import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Link } from 'react-router-dom';
import Navbar from './Elements/Navbar';
import Hero from './Elements/Hero';
import './App.css';

const socket = io.connect("http://localhost:3001");

export default function App() {
  return (
    <div className="app">
      <div className="layer1">
        <Navbar />
      </div>
      <div className="layer2">
        <Hero />
      </div>
    </div>
  );
}
