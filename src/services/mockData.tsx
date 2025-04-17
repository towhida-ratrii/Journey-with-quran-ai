export const mockDataService = {
  getCurrentUser: async () => ({
    id: "1",
    username: "quran_learner",
    name: "Ahmed Ali",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    bio: "Passionate about Quranic studies",
    followers: 250,
    following: 80,
  }),

  getUser: async (username) =>
    username === "quran_learner"
      ? {
          id: "1",
          username: "quran_learner",
          name: "Ahmed Ali",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
          bio: "Passionate about Quranic studies",
          followers: 250,
          following: 80,
        }
      : null,

  updateUser: async (username, data) => ({ ...data, username }),

  toggleFollow: async (username) => ({ username, followed: true }),

  getSuggestedUsers: async () => [
    {
      id: "2",
      username: "quran_teacher",
      name: "Ustadh Kareem",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kareem",
    },
    {
      id: "3",
      username: "hafidh_sara",
      name: "Hafidh Sara",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    },
  ],

  getLessons: async () => [
    {
      id: "101",
      title: "Tafsir of Surah Al-Fatiha",
      content:
        "Deep dive into the meaning and significance of Surah Al-Fatiha.",
      author: {
        username: "quran_teacher",
        name: "Ustadh Kareem",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kareem",
      },
      likes: 120,
      comments: 15,
      saved: false,
    },
  ],

  getUserLessons: async (username) => [
    {
      id: "102",
      title: "Rules of Tajweed",
      content: "A comprehensive guide to perfecting Quranic recitation.",
      author: {
        username,
        name: "Ahmed Ali",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
      },
      likes: 85,
      comments: 10,
      saved: true,
    },
  ],

  getSavedLessons: async (username) => [
    {
      id: "103",
      title: "Understanding Arabic Grammar for Quran",
      content:
        "Breaking down key grammar rules to better understand the Quran.",
      author: {
        username: "hafidh_sara",
        name: "Hafidh Sara",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      },
      likes: 95,
      comments: 8,
      saved: true,
    },
  ],

  createLesson: async (title, content) => ({
    id: "104",
    title,
    content,
    author: {
      username: "quran_learner",
      name: "Ahmed Ali",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    },
    likes: 0,
    comments: 0,
    saved: false,
  }),

  toggleLike: async (lessonId) => ({ id: lessonId, liked: true }),

  toggleSave: async (lessonId) => ({ id: lessonId, saved: true }),

  getComments: async (lessonId) => [
    {
      id: "201",
      content: "Very informative lesson!",
      author: {
        username: "quran_teacher",
        name: "Ustadh Kareem",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kareem",
      },
    },
    {
      id: "202",
      content: "JazakAllah Khair for sharing!",
      author: {
        username: "hafidh_sara",
        name: "Hafidh Sara",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      },
    },
  ],

  createComment: async (lessonId, content) => ({
    id: "203",
    content,
    author: {
      username: "quran_learner",
      name: "Ahmed Ali",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    },
  }),

  getTrendingTopics: async () => [
    { id: "301", topic: "#Tajweed", count: 800 },
    { id: "302", topic: "#QuranicGrammar", count: 650 },
  ],
};
