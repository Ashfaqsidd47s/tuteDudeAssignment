import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import "./referAndEarn.css";

function ReferAndEarn() {
  return (
    <div className="referAndEarn">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default ReferAndEarn
