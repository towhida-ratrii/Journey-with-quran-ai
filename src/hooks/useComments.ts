import { create } from "zustand";
import type { Comment } from "@/types";
import api from "@/services/api";

interface CommentsState {
  comments: Record<string, Comment[]>; // postId -> comments
  isLoading: boolean;
  error: string | null;
  loadComments: (postId: string) => Promise<void>;
  createComment: (postId: string, content: string) => Promise<void>;
}

export const useComments = create<CommentsState>((set, get) => ({
  comments: {},
  isLoading: false,
  error: null,

  loadComments: async (postId: string) => {
    try {
      set({ isLoading: true, error: null });
      const comments = await api.getComments(postId);
      set((state) => ({
        comments: { ...state.comments, [postId]: comments },
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed to load comments", isLoading: false });
    }
  },

  createComment: async (postId: string, content: string) => {
    try {
      set({ isLoading: true, error: null });
      const newComment = await api.createComment(postId, content);
      set((state) => ({
        comments: {
          ...state.comments,
          [postId]: [...(state.comments[postId] || []), newComment],
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed to create comment", isLoading: false });
    }
  },
}));
