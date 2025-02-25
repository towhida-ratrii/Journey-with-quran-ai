import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Edit2, Settings } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfilePosts from "./ProfilePosts";
import ProfileSettings from "./ProfileSettings";

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  avatarUrl: string;
  followersCount: number;
  followingCount: number;
  isFollowing?: boolean;
  isCurrentUser?: boolean;
}

const ProfilePage = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [showSettings, setShowSettings] = useState(false);

  // This would come from your auth context in a real app
  const isCurrentUser = !username || username === "current_user";

  // Mock user data - replace with real data from your backend
  const userProfile: UserProfile = {
    id: "1",
    name: isCurrentUser ? "Current User" : "Dr. Ahmad Al-Qari",
    username: isCurrentUser ? "current_user" : "ahmad_alqari",
    email: isCurrentUser ? "user@example.com" : "ahmad@example.com",
    bio: "Quran teacher & Arabic linguist with 15 years of experience. Passionate about spreading Quranic knowledge and proper recitation techniques.",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${isCurrentUser ? "current_user" : "Ahmad"}&backgroundColor=b6e3f4`,
    followersCount: 1420,
    followingCount: 530,
    isFollowing: !isCurrentUser,
    isCurrentUser,
  };

  return (
    <div className="flex-1 overflow-hidden bg-background">
      <div className="h-full flex flex-col overflow-hidden">
        {/* Profile Header */}
        <ProfileHeader profile={userProfile} />

        {/* Tabs Navigation */}
        <div className="border-b bg-card">
          <div className="container max-w-6xl mx-auto px-4">
            <Tabs
              defaultValue="posts"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="posts" className="relative">
                    Posts
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="relative">
                    Saved
                  </TabsTrigger>
                </TabsList>

                {isCurrentUser && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowSettings(true)}
                    >
                      <Settings className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="hidden md:flex items-center gap-2"
                      onClick={() => setShowSettings(true)}
                    >
                      <Edit2 className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                )}
              </div>

              <TabsContent value="posts" className="mt-0">
                <ProfilePosts userId={userProfile.id} />
              </TabsContent>

              <TabsContent value="saved" className="mt-0">
                <ProfilePosts userId={userProfile.id} saved />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Settings Dialog */}
        <ProfileSettings
          open={showSettings}
          onOpenChange={setShowSettings}
          profile={userProfile}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
