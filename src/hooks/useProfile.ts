import { create } from "zustand";
import type { User, Post } from "@/types";
import api from "@/services/api";

interface ProfileState {
  profile: User | null;
  posts: Post[];
  savedPosts: Post[];
  isLoading: boolean;
  error: string | null;
  loadProfile: (username: string) => Promise<void>;
  loadPosts: (username: string) => Promise<void>;
  loadSavedPosts: (username: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  toggleFollow: () => Promise<void>;
}

export const useProfile = create<ProfileState>((set, get) => ({
  profile: null,
  posts: [],
  savedPosts: [],
  isLoading: false,
  error: null,

  loadProfile: async (username: string) => {
    try {
      set({ isLoading: true, error: null });
      const profile = await api.getUser(username);
      set({ profile, isLoading: false });
    } catch (error) {
      set({ error: "Failed to load profile", isLoading: false });
    }
  },

  loadPosts: async (username: string) => {
    try {
      set({ isLoading: true, error: null });
      const posts = await api.getUserPosts(username);
      set({ posts, isLoading: false });
    } catch (error) {
      set({ error: "Failed to load posts", isLoading: false });
    }
  },

  loadSavedPosts: async (username: string) => {
    try {
      set({ isLoading: true, error: null });
      const savedPosts = await api.getSavedPosts(username);
      set({ savedPosts, isLoading: false });
    } catch (error) {
      set({ error: "Failed to load saved posts", isLoading: false });
    }
  },

  updateProfile: async (data: Partial<User>) => {
    try {
      set({ isLoading: true, error: null });
      const profile = get().profile;
      if (!profile) throw new Error("No profile loaded");

      const updatedProfile = await api.updateUser(profile.username, data);
      set({ profile: updatedProfile, isLoading: false });
    } catch (error) {
      set({ error: "Failed to update profile", isLoading: false });
    }
  },

  toggleFollow: async () => {
    try {
      const profile = get().profile;
      if (!profile) throw new Error("No profile loaded");

      const updatedProfile = await api.toggleFollow(profile.username);
      set({ profile: updatedProfile });
    } catch (error) {
      set({ error: "Failed to toggle follow" });
    }
  },
}));
