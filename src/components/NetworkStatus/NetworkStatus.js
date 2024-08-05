import React from 'react';
import { Online, Offline } from 'react-detect-offline';
import './NetworkStatus.css';

const NetworkStatus = () => {
  return (
    <div className="network-status">
      <Online>
        <p>You are online</p>
      </Online>
      <Offline>
        <div>
          <p>You are offline</p>
          <img src="/no_internet.png" alt="No Internet" />
        </div>
      </Offline>
    </div>
  );
};

export default NetworkStatus;