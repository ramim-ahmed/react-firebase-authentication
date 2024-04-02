import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function RootLayout() {
  const [domLoaded, setDomloaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDomloaded(false);
    }, 1000);
  }, []);

  if (domLoaded) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
    </div>
  );
}
