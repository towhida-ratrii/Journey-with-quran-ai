export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  avatarUrl: string;
  followersCount: number;
  followingCount: number;
  isFollowing?: boolean;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface TrendingTopic {
  name: string;
  posts: number;
  trend: "up" | "down" | "stable";
}

export interface SuggestedUser {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  isFollowing: boolean;
}
