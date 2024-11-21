import { Route, Routes, useLocation } from "react-router-dom";
import { CreditoPymeApp } from "../CreditoPymeApp";
import { CookiesPage, PrivacyPage, NotFound } from "../ui";
import { useEffect } from "react";

export const AppRouter = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  

  return (
    <Routes>
        <Route path="/" element={ <CreditoPymeApp /> } />
        <Route path="/politica-de-privacidad" element={ <PrivacyPage /> } />
        <Route path="/politica-de-cookies" element={ <CookiesPage /> } />
        <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
};
