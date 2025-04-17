import React from "react";
import PostCard from "../feed/PostCard";
import { mockDataService } from "@/lib/mockData";

interface ProfilePostsProps {
  username: string;
  saved?: boolean;
}

const ProfilePosts = ({ username, saved = false }: ProfilePostsProps) => {
  // Get posts for the specific user
  const posts = mockDataService.getUserPosts(username);

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
