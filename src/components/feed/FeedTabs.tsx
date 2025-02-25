import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeedTabsProps {
  activeTab?: "for-you" | "following";
  onTabChange?: (value: string) => void;
}

const FeedTabs = ({
  activeTab = "for-you",
  onTabChange = () => {},
}: FeedTabsProps) => {
  return (
    <div className="w-full bg-card border-b border-border">
      <Tabs
        defaultValue={activeTab}
        onValueChange={onTabChange}
        className="w-full"
      >
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger
            value="for-you"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            For You
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Following
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FeedTabs;
