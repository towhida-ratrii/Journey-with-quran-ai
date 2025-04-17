import { useState, useCallback } from "react";
import type { User } from "@/types";
import api from "@/services/api";

// Simple singleton pattern for auth state
let globalUser: User | null = null;
let globalIsLoading = false;
let globalError: string | null = null;
let listeners: Array<() => void> = [];

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

export const useAuth = () => {
  const [, setUpdate] = useState(0);

  // Subscribe to changes
  useState(() => {
    const listener = () => setUpdate((prev) => prev + 1);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  });

  const loadUser = useCallback(async () => {
    try {
      globalIsLoading = true;
      globalError = null;
      notifyListeners();

      const user = await api.getCurrentUser();
      globalUser = user;
      globalIsLoading = false;
      notifyListeners();
    } catch (error) {
      globalError = "Failed to load user";
      globalIsLoading = false;
      notifyListeners();
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      globalIsLoading = true;
      globalError = null;
      notifyListeners();

      // Replace with actual login API call
      const user = await api.getCurrentUser();
      globalUser = user;
      globalIsLoading = false;
      notifyListeners();
    } catch (error) {
      globalError = "Login failed";
      globalIsLoading = false;
      notifyListeners();
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      globalIsLoading = true;
      globalError = null;
      notifyListeners();

      // Replace with actual logout API call
      globalUser = null;
      globalIsLoading = false;
      notifyListeners();
    } catch (error) {
      globalError = "Logout failed";
      globalIsLoading = false;
      notifyListeners();
    }
  }, []);

  return {
    user: globalUser,
    isLoading: globalIsLoading,
    error: globalError,
    login,
    logout,
    loadUser,
  };
};
