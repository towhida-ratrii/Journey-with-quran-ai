import React from "react";
import PostCard from "../feed/PostCard";

interface ProfilePostsProps {
  userId: string;
  saved?: boolean;
}

const ProfilePosts = ({ userId, saved = false }: ProfilePostsProps) => {
  // Mock posts data - replace with real data from your backend
  const posts = [
    {
      id: "1",
      username: "Dr. Ahmad Al-Qari",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
      content: `Understanding Tajweed: A Comprehensive Guide to Proper Quranic Recitation

Today, I want to share an in-depth explanation of some crucial Tajweed rules that often confuse students. Let's break down the key concepts:

1. Ghunnah (Nasalization)
Ghunnah is the nasalization that occurs with the letters ن and م. The duration should be approximately 2 counts. Common mistakes include:
- Making it too short, which loses the musical quality
- Extending it beyond 2 counts, which is incorrect
- Not using the nasal cavity properly

#TajweedRules #QuranRecitation #IslamicEducation`,
      likes: 328,
      comments: 45,
      shares: 89,
    },
    {
      id: "2",
      username: "Dr. Ahmad Al-Qari",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
      content:
        "Quick Tajweed tip: When pronouncing the letter ض, make sure to touch the sides of your tongue to your upper molars. Practice makes perfect! #TajweedTips",
      likes: 156,
      comments: 23,
      shares: 12,
    },
  ];

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center h-[200px] text-muted-foreground">
        {saved ? "No saved posts yet" : "No posts yet"}
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePosts;
