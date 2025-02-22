import React, { useState } from "react";
import ContentArea from "@/components/feed/ContentArea";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Trophy, Book, BookOpen, Menu } from "lucide-react";
import Supplementary from "./layout/Supplementary";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[280px] flex-col bg-white border-r p-4 h-full">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-emerald-800 px-4">
            QuranSocial
          </h1>
          <nav className="space-y-2">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Calendar, label: "Events" },
              { icon: Trophy, label: "Competitions" },
              { icon: Book, label: "Books" },
              { icon: BookOpen, label: "Surah Sections" },
            ].map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${item.active ? "bg-emerald-50 text-emerald-800" : ""}`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b">
          <h1 className="text-xl font-bold text-emerald-800">QuranSocial</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-emerald-800">
                  QuranSocial
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                {[
                  { icon: Home, label: "Home", active: true },
                  { icon: Calendar, label: "Events" },
                  { icon: Trophy, label: "Competitions" },
                  { icon: Book, label: "Books" },
                  { icon: BookOpen, label: "Surah Sections" },
                ].map((item) => (
                  <Button
                    key={item.label}
                    variant={item.active ? "secondary" : "ghost"}
                    className={`w-full justify-start gap-3 ${item.active ? "bg-emerald-50 text-emerald-800" : ""}`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          <ContentArea />

          {/* Supplementary Sidebar */}
          <aside className="hidden lg:block w-[280px] border-l">
            <Supplementary />
          </aside>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-around bg-white border-t p-2">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Calendar, label: "Events" },
            { icon: Trophy, label: "Competitions" },
            { icon: Book, label: "Books" },
          ].map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="icon"
              className={item.active ? "text-emerald-800" : ""}
            >
              <item.icon className="h-6 w-6" />
            </Button>
          ))}
        </nav>
      </main>
    </div>
  );
};

export default HomePage;
