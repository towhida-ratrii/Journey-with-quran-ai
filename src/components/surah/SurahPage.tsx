import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SurahList from "./SurahList";
import SurahView from "./SurahView";

const SurahPage = () => {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [translation, setTranslation] = useState<"en" | "bn">("en");
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSurahSelect = (number: number) => {
    setSelectedSurah(number);
    setSheetOpen(false); // Close sheet after selection
  };

  return (
    <div className="flex flex-1 overflow-hidden bg-background">
      {/* Desktop Surah List Sidebar - Only visible on large screens */}
      <aside className="w-[300px] border-r bg-card hidden lg:block">
        <SurahList onSelect={handleSurahSelect} selectedSurah={selectedSurah} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b bg-card flex items-center justify-between gap-4">
          {/* Mobile/Tablet Surah List Trigger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden flex-none"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <SurahList
                onSelect={handleSurahSelect}
                selectedSurah={selectedSurah}
              />
            </SheetContent>
          </Sheet>

          {/* Translation Toggle */}
          <Tabs
            value={translation}
            onValueChange={(value) => setTranslation(value as "en" | "bn")}
            className="w-full max-w-[400px] mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="en">English</TabsTrigger>
              <TabsTrigger value="bn">বাংলা</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <ScrollArea className="flex-1">
          {selectedSurah ? (
            <SurahView surahNumber={selectedSurah} translation={translation} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Welcome to Quran Reader
              </h2>
              <p className="text-muted-foreground">
                Select a Surah from the{" "}
                {window.innerWidth >= 1024 ? "sidebar" : "menu"} to begin
                reading
              </p>
            </div>
          )}
        </ScrollArea>
      </main>
    </div>
  );
};

export default SurahPage;
