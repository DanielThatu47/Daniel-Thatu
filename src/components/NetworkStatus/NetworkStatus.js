import React from 'react';
import { Detector } from 'react-detect-offline';
import Image from './no_internet.png'; // Adjust the path as needed
import './NetworkStatus.css'; // Custom styles for the component

const NetworkStatus = ({ children }) => (
  <Detector
    render={({ online }) => (
      online ? (
        children
      ) : (
        <div className="network-status">
          <img src={Image} alt="No Internet Connection" />
          <p>You are currently offline. Please check your internet connection.</p>
        </div>
      )
    )}
  />
);

export default NetworkStatus;
