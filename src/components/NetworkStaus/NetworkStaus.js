import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NetworkStatus = () => {
  useEffect(() => {
    const handleOnline = () => {
      toast.dismiss();
      toast.success("You are online", { autoClose: 3000 });
    };

    const handleOffline = () => {
      toast.dismiss();
      toast.error("You are offline", { autoClose: false });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      toast.error("You are offline", { autoClose: false });
    }

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <ToastContainer />;
};

export default NetworkStatus;