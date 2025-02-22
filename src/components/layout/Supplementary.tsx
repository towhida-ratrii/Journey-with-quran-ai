import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Bookmark, TrendingUp } from "lucide-react";

interface TopicStats {
  name: string;
  posts: number;
  trend: "up" | "down" | "stable";
}

interface SuggestedUser {
  name: string;
  avatar: string;
  bio: string;
}

const Supplementary = () => {
  const trendingTopics: TopicStats[] = [
    { name: "tajweed-rules", posts: 342, trend: "up" },
    { name: "memorization-tips", posts: 245, trend: "up" },
    { name: "tafsir-studies", posts: 189, trend: "stable" },
    { name: "arabic-learning", posts: 156, trend: "up" },
  ];

  const suggestedUsers: SuggestedUser[] = [
    {
      name: "Sarah Ahmad",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "Quran teacher & Arabic linguist",
    },
    {
      name: "Yusuf Khan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf",
      bio: "Hafiz & Tajweed specialist",
    },
  ];

  return (
    <div className="w-full h-full bg-white p-4 space-y-6 overflow-y-scroll">
      {/* Trending Topics */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-emerald-800" />
          <h2 className="font-semibold text-lg">Trending Topics</h2>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <Card
              key={topic.name}
              className="p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-emerald-800 bg-emerald-50"
                  >
                    #{topic.name}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {topic.posts} posts
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-emerald-800 border-emerald-800 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
                >
                  Follow
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Suggested Users */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-emerald-800" />
          <h2 className="font-semibold text-lg">Suggested Scholars</h2>
        </div>
        <div className="space-y-4">
          {suggestedUsers.map((user) => (
            <div key={user.name} className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.bio}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-emerald-800 border-emerald-800 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Saved Items */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Bookmark className="h-5 w-5 text-emerald-800" />
          <h2 className="font-semibold text-lg">Saved Items</h2>
        </div>
        <Card className="p-4 bg-emerald-50 border-emerald-100">
          <p className="text-sm text-emerald-800">
            Save posts and topics to access them quickly later
          </p>
          <Button className="w-full mt-3 bg-emerald-800 hover:bg-emerald-700">
            View Saved Items
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Supplementary;
