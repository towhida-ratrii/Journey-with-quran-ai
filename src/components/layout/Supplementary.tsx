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
    <div className="w-full h-full bg-card overflow-y-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-card/80 backdrop-blur-sm p-4 border-b z-10">
        <h2 className="text-xl font-semibold text-primary">Discover</h2>
      </div>

      <div className="p-4 space-y-6">
        {/* Trending Topics */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-lg text-card-foreground">
              Trending Topics
            </h2>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((topic) => (
              <Card
                key={topic.name}
                className="p-3 hover:bg-background/50 transition-colors cursor-pointer group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="text-primary bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    >
                      #{topic.name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {topic.posts} posts
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-primary border-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    Follow Topic
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Suggested Users */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-lg text-card-foreground">
              Suggested Scholars
            </h2>
          </div>
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <Card
                key={user.name}
                className="p-3 hover:bg-background/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition-all duration-200 group-hover:ring-primary/40">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-card-foreground truncate group-hover:text-primary transition-colors">
                      {user.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {user.bio}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 text-primary border-primary hover:bg-primary/10 transition-all duration-200"
                >
                  Follow
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Saved Items */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Bookmark className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-lg text-card-foreground">
              Saved Items
            </h2>
          </div>
          <Card className="p-4 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer">
            <p className="text-sm text-primary font-medium">
              Save posts and topics to access them quickly later
            </p>
            <Button className="w-full mt-3 bg-primary hover:bg-primary/90 transition-colors">
              View Saved Items
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Supplementary;
