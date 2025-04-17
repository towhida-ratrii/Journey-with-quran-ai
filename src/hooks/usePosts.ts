import { create } from "zustand";
import type { Post } from "@/types";
import api from "@/services/api";

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  feedType: "for-you" | "following";
  loadPosts: () => Promise<void>;
  setFeedType: (type: "for-you" | "following") => void;
  createPost: (content: string) => Promise<void>;
  toggleLike: (postId: string) => Promise<void>;
  toggleSave: (postId: string) => Promise<void>;
}

export const usePosts = create<PostsState>((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  feedType: "for-you",

  loadPosts: async () => {
    try {
      set({ isLoading: true, error: null });
      const posts = await api.getFeedPosts(get().feedType);
      set({ posts, isLoading: false });
    } catch (error) {
      set({ error: "Failed to load posts", isLoading: false });
    }
  },

  setFeedType: (type) => {
    set({ feedType: type });
    get().loadPosts();
  },

  createPost: async (content: string) => {
    try {
      set({ isLoading: true, error: null });
      const newPost = await api.createPost(content);
      set((state) => ({
        posts: [newPost, ...state.posts],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed to create post", isLoading: false });
    }
  },

  toggleLike: async (postId: string) => {
    try {
      const updatedPost = await api.toggleLike(postId);
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? updatedPost : post,
        ),
      }));
    } catch (error) {
      set({ error: "Failed to toggle like" });
    }
  },

  toggleSave: async (postId: string) => {
    try {
      await api.toggleSave(postId);
    } catch (error) {
      set({ error: "Failed to toggle save" });
    }
  },
}));
