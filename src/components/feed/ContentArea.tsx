import React, { useState } from "react";
import PostCreator from "./PostCreator";
import FeedTabs from "./FeedTabs";
import PostFeed from "./PostFeed";
import { ScrollArea } from "@/components/ui/scroll-area";

const ContentArea = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <ScrollArea className="flex-1 bg-background">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="py-4">
          <PostCreator />
        </div>
        <FeedTabs
          activeTab={activeTab}
          onTabChange={(value) => setActiveTab(value)}
        />
        <PostFeed feedType={activeTab} />
      </div>
    </ScrollArea>
  );
};

export default ContentArea;
