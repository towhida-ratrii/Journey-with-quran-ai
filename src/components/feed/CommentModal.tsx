import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Send } from "lucide-react";

interface Comment {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes?: number;
}

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
  comments?: Comment[];
}

const CommentModal = ({
  isOpen,
  onClose,
  postId,
  comments = defaultComments,
}: CommentModalProps) => {
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>(
    {},
  );
  const [commentLikes, setCommentLikes] = useState<Record<string, number>>(
    comments.reduce(
      (acc, comment) => ({ ...acc, [comment.id]: comment.likes || 0 }),
      {},
    ),
  );

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  const handleLikeComment = (commentId: string) => {
    setLikedComments((prev) => {
      const newState = { ...prev, [commentId]: !prev[commentId] };
      return newState;
    });
    setCommentLikes((prev) => {
      const currentLikes = prev[commentId] || 0;
      return {
        ...prev,
        [commentId]: likedComments[commentId]
          ? currentLikes - 1
          : currentLikes + 1,
      };
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] h-[600px] flex flex-col p-0 gap-0 bg-background">
        <DialogHeader className="p-6 pb-4 bg-card border-b border-border">
          <DialogTitle className="text-xl font-semibold text-primary">
            Comments
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Join the discussion and share your thoughts
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 py-6">
            {comments.map((comment) => (
              <div key={comment.id} className="group flex gap-3">
                <Avatar className="h-8 w-8 transition-transform group-hover:scale-105">
                  <AvatarImage src={comment.avatarUrl} />
                  <AvatarFallback>{comment.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="bg-card rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm hover:text-primary cursor-pointer transition-colors">
                        {comment.username}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm mt-1 text-card-foreground">
                      {comment.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 px-3">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className={`flex items-center gap-1 text-xs transition-colors ${likedComments[comment.id] ? "text-rose-600" : "text-muted-foreground hover:text-rose-600"}`}
                    >
                      <Heart
                        className={`h-4 w-4 ${likedComments[comment.id] ? "fill-current" : ""}`}
                      />
                      <span>{commentLikes[comment.id] || 0}</span>
                    </button>
                    <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 bg-card border-t border-border mt-auto">
          <div className="flex gap-2 items-start">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current_user" />
              <AvatarFallback>Y</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex gap-2">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 min-h-[80px] resize-none bg-background"
              />
              <Button
                onClick={handleSubmitComment}
                size="icon"
                className="bg-primary hover:bg-primary/90 h-10 w-10"
                disabled={!newComment.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const defaultComments: Comment[] = [
  {
    id: "1",
    username: "Fatima Hassan",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    content:
      "JazakAllah for sharing these valuable insights! The explanation about Ghunnah really helped me understand it better.",
    timestamp: "2 hours ago",
    likes: 5,
  },
  {
    id: "2",
    username: "Yusuf Khan",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf",
    content:
      "Could you please elaborate more on the Qalqalah rules? Sometimes I struggle with the strength of the bounce in different positions.",
    timestamp: "1 hour ago",
    likes: 3,
  },
  {
    id: "3",
    username: "Sarah Ahmad",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "This is exactly what I needed! The practical tips at the end are especially helpful.",
    timestamp: "45 minutes ago",
    likes: 2,
  },
];

export default CommentModal;
