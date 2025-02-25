import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import MobileHeader from "./MobileHeader";

const RootLayout = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          <Outlet />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </main>
    </div>
  );
};

export default RootLayout;
