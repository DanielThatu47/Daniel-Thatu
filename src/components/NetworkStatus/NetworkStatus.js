import React, { useState, useEffect } from 'react';
import NoInternetImage from './no internet.png'; // Adjust the path as needed
import './NetworkStatus.css'; // Custom styles for the component

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

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