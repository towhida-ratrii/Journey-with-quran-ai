import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./components/home";
import SurahPage from "./components/surah/SurahPage";
import SurahTafsirPage from "./components/surah/SurahTafsirPage";
import ProfilePage from "./components/profile/ProfilePage";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/surah-sections" element={<SurahPage />} />
          <Route path="/tafsir" element={<SurahTafsirPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Route>

        {/* Tempo Routes */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
