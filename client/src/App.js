import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Link } from 'react-router-dom';
import Navbar from './Elements/Navbar';
import Hero from './Elements/Hero';
import Solutions from './Elements/Solutions'
import MarketInsights from './Elements/MarketInsights'
import './App.css';

const socket = io.connect("http://localhost:3001");

export default function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
        <section className="color"></section>
        <section >
          <Hero />
        </section>
        <section>
          <Solutions />
        </section>
        <section>
          <MarketInsights />
        </section>
      </div>
    </div>
  );
}
