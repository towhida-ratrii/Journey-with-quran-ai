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
import CommentModal from "./CommentModal";

interface PostCardProps {
  id?: string;
  username?: string;
  avatarUrl?: string;
  content?: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const MAX_LENGTH = 300;

const PostCard = ({
  id = "1",
  username = "Abdullah Ahmed",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah",
  content = "Just finished memorizing Surah Al-Baqarah!",
  likes = 42,
  comments = 12,
  shares = 5,
}: PostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(false);

  const shouldTruncate = content.length > MAX_LENGTH;

  const displayContent = isExpanded
    ? content
    : shouldTruncate
      ? `${content.slice(0, MAX_LENGTH)}...`
      : content;

  const handle = `@${username.toLowerCase().replace(/ /g, "_")}`;

  const handleLike = async () => {
    if (isLikeLoading) return;

    setIsLikeLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 200));
      setIsLiked(!isLiked);
      setLikesCount((current) => (isLiked ? current - 1 : current + 1));
    } finally {
      setIsLikeLoading(false);
    }
  };

  return (
    <>
      <Card className="w-full max-w-[700px] p-4 mb-4 bg-card">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Avatar className="h-10 w-10 transition-transform group-hover:scale-105">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {username}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                {handle}
              </p>
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

        <div className="mt-4 text-card-foreground">
          <p className="whitespace-pre-wrap">{displayContent}</p>
          {shouldTruncate && (
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
            >
              {isExpanded ? "See less" : "See more"}
            </Button>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            disabled={isLikeLoading}
            className={`flex items-center gap-2 transition-colors ${isLiked ? "text-rose-600 hover:text-rose-500" : "hover:text-rose-600 hover:bg-rose-50/50"}`}
          >
            <Heart
              className={`h-5 w-5 transition-transform ${isLiked ? "fill-current scale-110" : ""} ${isLikeLoading ? "animate-pulse" : ""}`}
            />
            <span className="font-medium">{likesCount}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCommentModalOpen(true)}
            className="flex items-center gap-2 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{comments}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Share2 className="h-5 w-5" />
            <span className="font-medium">{shares}</span>
          </Button>
        </div>
      </Card>

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        postId={id}
      />
    </>
  );
};

export default PostCard;
