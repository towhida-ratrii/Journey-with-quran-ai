import type {
  User,
  Post,
  Comment,
  TrendingTopic,
  SuggestedUser,
} from "@/types";

// Mock users data
const users: Record<string, User> = {
  current_user: {
    id: "current",
    name: "Current User",
    username: "current_user",
    email: "user@example.com",
    bio: "Learning Quran and sharing the journey",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=current_user`,
    followersCount: 120,
    followingCount: 230,
  },
  ahmad_alqari: {
    id: "1",
    name: "Dr. Ahmad Al-Qari",
    username: "ahmad_alqari",
    email: "ahmad@example.com",
    bio: "Quran teacher & Arabic linguist with 15 years of experience. Passionate about spreading Quranic knowledge and proper recitation techniques.",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad`,
    followersCount: 1420,
    followingCount: 530,
    isFollowing: true,
  },
  fatima_hassan: {
    id: "2",
    name: "Fatima Hassan",
    username: "fatima_hassan",
    email: "fatima@example.com",
    bio: "Dedicated to learning and teaching Tajweed. Let's learn together!",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima`,
    followersCount: 890,
    followingCount: 450,
    isFollowing: false,
  },
  omar_hasan: {
    id: "3",
    name: "Omar Hasan",
    username: "omar_hasan",
    email: "omar@example.com",
    bio: "Hafiz and Tajweed instructor. Sharing daily Quran lessons and tips.",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Omar`,
    followersCount: 750,
    followingCount: 320,
    isFollowing: true,
  },
};

// Mock posts data
const posts: Record<string, Post[]> = {
  ahmad_alqari: [
    {
      id: "1",
      userId: "1",
      username: "Dr. Ahmad Al-Qari",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
      content: `Understanding Tajweed: A Comprehensive Guide to Proper Quranic Recitation\n\nToday, I want to share an in-depth explanation of some crucial Tajweed rules that often confuse students. Let's break down the key concepts:\n\n1. Ghunnah (Nasalization)\nGhunnah is the nasalization that occurs with the letters ن and م. The duration should be approximately 2 counts. Common mistakes include:\n- Making it too short, which loses the musical quality\n- Extending it beyond 2 counts, which is incorrect\n- Not using the nasal cavity properly\n\n#TajweedRules #QuranRecitation #IslamicEducation`,
      timestamp: "2 hours ago",
      likes: 328,
      comments: 45,
      shares: 89,
    },
    {
      id: "2",
      userId: "1",
      username: "Dr. Ahmad Al-Qari",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
      content:
        "Quick Tajweed tip: When pronouncing the letter ض, make sure to touch the sides of your tongue to your upper molars. Practice makes perfect! #TajweedTips",
      timestamp: "5 hours ago",
      likes: 156,
      comments: 23,
      shares: 12,
    },
  ],
  fatima_hassan: [
    {
      id: "3",
      userId: "2",
      username: "Fatima Hassan",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      content:
        "Today's reflection on Ayat-ul-Kursi really opened my eyes to new meanings. It's amazing how each time you study, you discover something new. Would love to hear your thoughts! 🌟",
      timestamp: "1 hour ago",
      likes: 38,
      comments: 15,
      shares: 3,
    },
  ],
  omar_hasan: [
    {
      id: "4",
      userId: "3",
      username: "Omar Hasan",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
      content:
        "Started a new study circle for Tajweed basics. If anyone's interested in joining, we meet every Sunday after Maghrib prayer. Let's perfect our recitation together! 📚",
      timestamp: "3 hours ago",
      likes: 56,
      comments: 23,
      shares: 8,
    },
  ],
  current_user: [
    {
      id: "5",
      userId: "current",
      username: "Current User",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=current_user",
      content:
        "Just completed my daily Quran reading goal! 🎉 The journey of learning continues...",
      timestamp: "1 hour ago",
      likes: 12,
      comments: 3,
      shares: 1,
    },
  ],
};

// Mock comments data
const comments: Record<string, Comment[]> = {
  "1": [
    {
      id: "1",
      postId: "1",
      userId: "2",
      username: "Fatima Hassan",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      content: "JazakAllah for sharing these valuable insights!",
      timestamp: "1 hour ago",
      likes: 5,
    },
  ],
};

// Mock trending topics
const trendingTopics: TrendingTopic[] = [
  { name: "tajweed-rules", posts: 342, trend: "up" },
  { name: "memorization-tips", posts: 245, trend: "up" },
  { name: "tafsir-studies", posts: 189, trend: "stable" },
];

// Mock suggested users
const suggestedUsers: SuggestedUser[] = [
  {
    id: "4",
    name: "Zainab Ali",
    username: "zainab_ali",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
    bio: "Quran memorization specialist",
    isFollowing: false,
  },
];

export const mockDataService = {
  getCurrentUser: (): User => {
    return users.current_user;
  },

  getUser: (username: string): User | null => {
    return users[username] || null;
  },

  getUserPosts: (username: string): Post[] => {
    return posts[username] || [];
  },

  getSavedPosts: (username: string): Post[] => {
    // For demo, return the same posts
    return posts[username] || [];
  },

  getFeedPosts: (type: "for-you" | "following"): Post[] => {
    // For demo, combine all posts
    return Object.values(posts).flat();
  },

  updateUser: (username: string, data: Partial<User>): User => {
    if (!users[username]) throw new Error("User not found");
    users[username] = { ...users[username], ...data };
    return users[username];
  },

  toggleFollow: (username: string): User => {
    if (!users[username]) throw new Error("User not found");
    const user = users[username];
    user.isFollowing = !user.isFollowing;
    user.followersCount += user.isFollowing ? 1 : -1;
    return user;
  },

  createPost: (content: string): Post => {
    const newPost: Post = {
      id: String(Date.now()),
      userId: "current",
      username: "Current User",
      avatarUrl: users.current_user.avatarUrl,
      content,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    posts.current_user = [newPost, ...(posts.current_user || [])];
    return newPost;
  },

  toggleLike: (postId: string): Post => {
    const post = Object.values(posts)
      .flat()
      .find((p) => p.id === postId);
    if (!post) throw new Error("Post not found");
    post.likes += post.isLiked ? -1 : 1;
    post.isLiked = !post.isLiked;
    return post;
  },

  toggleSave: (postId: string): void => {
    // Implement save functionality
  },

  getComments: (postId: string): Comment[] => {
    return comments[postId] || [];
  },

  createComment: (postId: string, content: string): Comment => {
    const newComment: Comment = {
      id: String(Date.now()),
      postId,
      userId: "current",
      username: "Current User",
      avatarUrl: users.current_user.avatarUrl,
      content,
      timestamp: "Just now",
      likes: 0,
    };
    comments[postId] = [newComment, ...(comments[postId] || [])];
    return newComment;
  },

  getTrendingTopics: (): TrendingTopic[] => {
    return trendingTopics;
  },

  getSuggestedUsers: (): SuggestedUser[] => {
    return suggestedUsers;
  },
};
