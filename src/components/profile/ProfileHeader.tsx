import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { UserProfile } from "./ProfilePage";

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  const handleFollow = () => {
    // Implement follow/unfollow logic
    console.log("Toggle follow");
  };

  return (
    <div className="border-b bg-card">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Avatar */}
          <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback>{profile.name[0]}</AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <h1 className="text-2xl font-semibold">{profile.name}</h1>
              {!profile.isCurrentUser && (
                <Button
                  variant={profile.isFollowing ? "outline" : "default"}
                  onClick={handleFollow}
                >
                  {profile.isFollowing ? "Following" : "Follow"}
                </Button>
              )}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{profile.followingCount}</span>
                <span className="text-muted-foreground">Following</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{profile.followersCount}</span>
                <span className="text-muted-foreground">Followers</span>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm whitespace-pre-wrap">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
