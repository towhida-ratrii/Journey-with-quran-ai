import React from "react";
import ContentArea from "@/components/feed/ContentArea";
import Supplementary from "./layout/Supplementary";

const HomePage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <ContentArea />
      {/* Supplementary Sidebar */}
      <aside className="hidden lg:block w-[280px] border-l bg-card">
        <Supplementary />
      </aside>
    </div>
  );
};

export default HomePage;
