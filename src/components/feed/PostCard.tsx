import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  username?: string;
  avatarUrl?: string;
  content?: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const MAX_LENGTH = 300;

const PostCard = ({
  username = "Abdullah Ahmed",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah",
  content = "Just finished memorizing Surah Al-Baqarah!",
  likes = 42,
  comments = 12,
  shares = 5,
}: PostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = content.length > MAX_LENGTH;

  const displayContent = isExpanded
    ? content
    : shouldTruncate
      ? `${content.slice(0, MAX_LENGTH)}...`
      : content;

  const handle = `@${username.toLowerCase().replace(/ /g, "_")}`;

  return (
    <Card className="w-full max-w-[700px] p-4 mb-4 bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">{username}</h3>
            <p className="text-sm text-gray-500">{handle}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save Post</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4 text-gray-700">
        <p className="whitespace-pre-wrap">{displayContent}</p>
        {shouldTruncate && (
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 p-0 h-auto text-emerald-800 hover:text-emerald-700"
          >
            {isExpanded ? "See less" : "See more"}
          </Button>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t pt-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:text-rose-600 hover:bg-rose-50 transition-colors"
        >
          <Heart className="h-5 w-5" />
          <span className="font-medium">{likes}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">{comments}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <Share2 className="h-5 w-5" />
          <span className="font-medium">{shares}</span>
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;
