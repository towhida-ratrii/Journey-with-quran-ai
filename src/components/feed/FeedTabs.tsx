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
    <div className="w-full bg-white border-b">
      <Tabs
        defaultValue={activeTab}
        onValueChange={onTabChange}
        className="w-full"
      >
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger
            value="for-you"
            className="data-[state=active]:text-emerald-800 data-[state=active]:border-b-2 data-[state=active]:border-emerald-800"
          >
            For You
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="data-[state=active]:text-emerald-800 data-[state=active]:border-b-2 data-[state=active]:border-emerald-800"
          >
            Following
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FeedTabs;
