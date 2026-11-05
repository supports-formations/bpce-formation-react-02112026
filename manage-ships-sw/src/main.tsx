import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppBis from "./AppBis.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./shared/layouts/MainLayout.tsx";
import PilotsPage from "./features/pilots/pages/PilotsPage.tsx";
import ShipsPage from "./features/ships/pages/ShipsPage.tsx";
import ThemeContextProvider from "./shared/components/contexts/ThemeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <ThemeContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<AppBis />} />
            <Route path="/pilots" element={<PilotsPage />} />
            <Route path="/ships" element={<ShipsPage />} />
          </Routes>
        </MainLayout>
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
