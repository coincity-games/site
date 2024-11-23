import { Route, Routes, useLocation } from "react-router-dom";
import { CoincityApp } from "../CoincityApp";
import { NotFound } from "../ui";
import { useEffect } from "react";

export const AppRouter = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  

  return (
    <Routes>
        <Route path="/" element={ <CoincityApp /> } />
        <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
};
