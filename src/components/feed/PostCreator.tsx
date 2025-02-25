import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookMarked, Image as ImageIcon, Link, Send } from "lucide-react";

interface PostCreatorProps {
  onSubmit?: (content: string) => void;
  userAvatar?: string;
  username?: string;
}

const PostCreator = ({
  onSubmit = () => {},
  userAvatar = "https://api.dicebear.com/9.x/micah/svg?seed=Luis",
  username = "User",
}: PostCreatorProps) => {
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState("write");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <Card className="w-full max-w-[700px] p-4 bg-card">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="write">
              <Textarea
                placeholder="Share your Quran learning journey..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] mb-4 bg-background"
              />
            </TabsContent>

            <TabsContent value="preview">
              <div className="min-h-[120px] mb-4 p-3 border rounded-md bg-background text-card-foreground">
                {content || "Preview will appear here"}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Link className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <BookMarked className="h-4 w-4" />
              </Button>
            </div>

            <Button
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCreator;
