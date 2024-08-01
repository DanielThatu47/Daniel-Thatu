import React from 'react';
import { Detector } from 'react-detect-offline';
import Demo1 from './demo1.svg'; 
// Adjust the path as needed
import './NetworkStatus.css'; // Custom styles for the component

const NetworkStatus = ({ children }) => (
  <Detector
    render={({ online }) => (
      online ? (
        children
      ) : (
        <div className="network-status">
          <img src={Demo1} alt="No Internet Connection" />
          <p>You are currently offline. Please check your internet connection.</p>
        </div>
      )
    )}
  />
);

export default NetworkStatus;
