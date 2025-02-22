import React from "react";
import PostCard from "./PostCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

interface PostFeedProps {
  posts?: Post[];
  feedType?: "for-you" | "following";
}

const PostFeed = ({
  posts = defaultPosts,
  feedType = "for-you",
}: PostFeedProps) => {
  // Filter posts based on feedType
  const displayPosts = feedType === "following" ? followingPosts : defaultPosts;

  return (
    <ScrollArea className="h-full w-full bg-gray-50">
      <div className="flex flex-col items-center gap-4 p-4">
        {displayPosts.map((post) => (
          <PostCard
            key={post.id}
            username={post.username}
            avatarUrl={post.avatarUrl}
            timestamp={post.timestamp}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

const defaultPosts: Post[] = [
  {
    id: "1",
    username: "Dr. Ahmad Al-Qari",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    timestamp: "1 hour ago",
    content: `Understanding Tajweed: A Comprehensive Guide to Proper Quranic Recitation

Today, I want to share an in-depth explanation of some crucial Tajweed rules that often confuse students. Let's break down the key concepts:

1. Ghunnah (Nasalization)
Ghunnah is the nasalization that occurs with the letters ن and م. The duration should be approximately 2 counts. Common mistakes include:
- Making it too short, which loses the musical quality
- Extending it beyond 2 counts, which is incorrect
- Not using the nasal cavity properly

2. Idgham (Merging)
There are several types of Idgham:
- Complete merging (Idgham Kamil)
- Partial merging (Idgham Naqis)
- Merging with Ghunnah
- Merging without Ghunnah

Each has specific letters and rules that must be followed precisely.

3. Qalqalah (Echo/Bounce)
The five Qalqalah letters (ق ط ب ج د) require special attention:
- Strong bounce at the end of words
- Lighter bounce in the middle
- Common mistake: Making it too strong in the middle

4. Madd (Elongation)
Proper elongation is crucial:
- Natural Madd: 2 counts
- Connected Madd: 4 counts
- Separated Madd: 4-5 counts
- Necessary Madd: 6 counts

Practical Tips:
- Record yourself and compare with expert recitations
- Practice each rule separately before combining
- Focus on quality over quantity
- Regular practice with a qualified teacher

Remember: Tajweed isn't just about rules—it's about preserving the beauty and accuracy of the Quran's recitation. Take your time, be patient, and strive for excellence.

#TajweedRules #QuranRecitation #IslamicEducation`,
    likes: 328,
    comments: 45,
    shares: 89,
  },
  {
    id: "2",
    username: "Fatima Hassan",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    timestamp: "4 hours ago",
    content:
      "Today's reflection on Ayat-ul-Kursi really opened my eyes to new meanings. It's amazing how each time you study, you discover something new. Would love to hear your thoughts! 🌟",
    likes: 38,
    comments: 15,
    shares: 3,
  },
  {
    id: "3",
    username: "Omar Malik",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    timestamp: "6 hours ago",
    content:
      "Started a new study circle for Tajweed basics. If anyone's interested in joining, we meet every Sunday after Maghrib prayer. Let's perfect our recitation together! 📚",
    likes: 56,
    comments: 23,
    shares: 8,
  },
];

const followingPosts: Post[] = [
  {
    id: "4",
    username: "Sarah Ahmad",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    timestamp: "1 hour ago",
    content:
      "Excited to start our new series on Tafsir of Juz Amma! Join us every Tuesday after Isha prayer for in-depth discussions and reflections. #QuranStudy #Tafsir",
    likes: 28,
    comments: 8,
    shares: 4,
  },
  {
    id: "5",
    username: "Yusuf Khan",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf",
    timestamp: "3 hours ago",
    content:
      "Quick Tajweed tip: When pronouncing the letter ض, make sure to touch the sides of your tongue to your upper molars. Practice makes perfect! #TajweedTips",
    likes: 45,
    comments: 12,
    shares: 15,
  },
];

export default PostFeed;
