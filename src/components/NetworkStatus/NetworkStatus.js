import React from 'react';
import { useOffline } from '@react-hook/offline';
import NoInternetImage from './no internet.png'; // Adjust the path as needed
import './NetworkStatus.css'; // Custom styles for the component

const NetworkStatus = () => {
  const isOffline = useOffline();

  if (isOffline) {
    return (
      <div className="network-status">
        <img src={NoInternetImage} alt="No Internet Connection" />
        <p>You are currently offline. Please check your internet connection.</p>
      </div>
    );
  }

  return null;
};

export default NetworkStatus;