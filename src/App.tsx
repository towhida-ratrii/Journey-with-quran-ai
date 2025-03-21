import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./components/home";
import SurahPage from "./components/surah/SurahPage";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {/* Main App Routes */}
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/surah-sections" element={<SurahPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
          </Route>
        </Routes>

        {/* Tempo Routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
