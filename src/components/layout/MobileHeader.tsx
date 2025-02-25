import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const MobileHeader = () => {
  return (
    <header className="md:hidden sticky top-0 flex items-center justify-between p-4 bg-card border-b z-50">
      <h1 className="text-xl font-bold text-primary">QuranConnect</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default MobileHeader;
