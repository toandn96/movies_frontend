import React from "react";

import { toast } from "react-toastify";

const getOnLineStatus = () =>
  typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;

const useNetworkStatus = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());

  const setOnline = () => {
    toast.success("Internet connection reestablished");
    setStatus(true);
  };
  const setOffline = () => {
    toast.error(
      "No internet connection. Please check your network settings and try again.",
      { autoClose: 5000 }
    );
    setStatus(false);
  };

  React.useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  return status;
};

export default useNetworkStatus;
