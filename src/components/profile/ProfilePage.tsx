import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Edit2, Settings } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfilePosts from "./ProfilePosts";
import ProfileSettings from "./ProfileSettings";
import { mockDataService, type User } from "@/lib/mockData";

const ProfilePage = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [showSettings, setShowSettings] = useState(false);
  const [profile, setProfile] = useState<User | null>(null);

  // This would come from your auth context in a real app
  const isCurrentUser = !username || username === "current_user";

  useEffect(() => {
    const userHandle = isCurrentUser ? "current_user" : username;
    const userData = mockDataService.getUser(userHandle!);
    setProfile(userData);
  }, [username, isCurrentUser]);

  if (!profile) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">User not found</p>
      </div>
    );
  }

  const handleProfileUpdate = (updatedProfile: User) => {
    setProfile(updatedProfile);
    setShowSettings(false);
  };

  return (
    <div className="flex-1 overflow-hidden bg-background">
      <div className="h-full flex flex-col overflow-hidden">
        {/* Profile Header */}
        <ProfileHeader profile={profile} />

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
                <ProfilePosts username={profile.username} />
              </TabsContent>

              <TabsContent value="saved" className="mt-0">
                <ProfilePosts username={profile.username} saved />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Settings Dialog */}
        <ProfileSettings
          open={showSettings}
          onOpenChange={setShowSettings}
          profile={profile}
          onUpdate={handleProfileUpdate}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
