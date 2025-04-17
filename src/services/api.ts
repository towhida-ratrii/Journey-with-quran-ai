import { mockDataService } from "./mockData";
import type {
  User,
  Post,
  Comment,
  TrendingTopic,
  SuggestedUser,
} from "@/types";

// This is where you'd configure your actual API client (axios, fetch, etc.)
const api = {
  // Auth
  getCurrentUser: async (): Promise<User> => {
    // Replace with actual API call
    return mockDataService.getCurrentUser();
  },

  // Users
  getUser: async (username: string): Promise<User | null> => {
    // Replace with actual API call
    return mockDataService.getUser(username);
  },

  updateUser: async (username: string, data: Partial<User>): Promise<User> => {
    // Replace with actual API call
    return mockDataService.updateUser(username, data);
  },

  toggleFollow: async (username: string): Promise<User> => {
    // Replace with actual API call
    return mockDataService.toggleFollow(username);
  },

  getSuggestedUsers: async (): Promise<SuggestedUser[]> => {
    // Replace with actual API call
    return mockDataService.getSuggestedUsers();
  },

  // Posts
  getFeedPosts: async (type: "for-you" | "following"): Promise<Post[]> => {
    // Replace with actual API call
    return mockDataService.getFeedPosts(type);
  },

  getUserPosts: async (username: string): Promise<Post[]> => {
    // Replace with actual API call
    return mockDataService.getUserPosts(username);
  },

  getSavedPosts: async (username: string): Promise<Post[]> => {
    // Replace with actual API call
    return mockDataService.getSavedPosts(username);
  },

  createPost: async (content: string): Promise<Post> => {
    // Replace with actual API call
    return mockDataService.createPost(content);
  },

  toggleLike: async (postId: string): Promise<Post> => {
    // Replace with actual API call
    return mockDataService.toggleLike(postId);
  },

  toggleSave: async (postId: string): Promise<void> => {
    // Replace with actual API call
    return mockDataService.toggleSave(postId);
  },

  // Comments
  getComments: async (postId: string): Promise<Comment[]> => {
    // Replace with actual API call
    return mockDataService.getComments(postId);
  },

  createComment: async (postId: string, content: string): Promise<Comment> => {
    // Replace with actual API call
    return mockDataService.createComment(postId, content);
  },

  // Trending
  getTrendingTopics: async (): Promise<TrendingTopic[]> => {
    // Replace with actual API call
    return mockDataService.getTrendingTopics();
  },
};

export default api;
