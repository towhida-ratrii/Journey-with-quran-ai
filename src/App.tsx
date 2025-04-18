import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./components/home";
import SurahPage from "./components/surah/SurahPage";
import HadithPage from "./components/hadith/HadithPage";
import SurahTafsirPage from "./components/surah/SurahTafsirPage";
import ProfilePage from "./components/profile/ProfilePage";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import GuidePage from "./components/guide/GuidePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* Tempo Routes */}
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/surah-sections" element={<SurahPage />} />
          <Route path="/tafsir" element={<SurahTafsirPage />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Route>

        {/* Allow Tempo routes to be captured */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
