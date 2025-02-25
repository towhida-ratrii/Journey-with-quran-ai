import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Trophy, Book, BookOpen, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: Trophy, label: "Competitions", path: "/competitions" },
  { icon: Book, label: "Books", path: "/books" },
  { icon: BookOpen, label: "Surah", path: "/surah-sections" },
  { icon: User, label: "Profile", path: "/profile" },
];

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around bg-card border-t p-2 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) =>
            `p-2 rounded-md transition-colors ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`
          }
        >
          <item.icon className="h-6 w-6" />
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileNav;
