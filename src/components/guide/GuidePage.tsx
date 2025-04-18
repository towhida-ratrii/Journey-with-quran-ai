import React, { useState } from "react";
import { Scroll, BookOpen, Edit3, Heart, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { translations } from "@/lib/translations";

type Language = "en" | "bn";

const GuidePage = () => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  const textClass = language === "bn" ? "font-bangla" : "";

  return (
    <div className="flex flex-col h-full overflow-auto p-4 md:p-6 bg-background">
      <div className="max-w-4xl mx-auto w-full">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              {language === "en" ? "বাংলা" : "English"}
            </span>
          </button>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1
            className={`text-3xl md:text-4xl font-bold text-primary mb-2 ${textClass}`}
          >
            {t.title}
          </h1>
          <p className={`text-muted-foreground text-lg ${textClass}`}>
            {t.subtitle}
          </p>
          <Separator className="my-6 bg-primary/20" />
        </div>

        {/* Introduction Section */}
        <Card className="mb-8 border-primary/20 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle className={`text-2xl ${textClass}`}>
                {t.missionTitle}
              </CardTitle>
            </div>
            <CardDescription className={textClass}>
              {t.missionSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className={`mb-4 ${textClass}`}>
              <span className="font-semibold text-primary">{t.title}</span>{" "}
              {t.missionContent.para1}
            </p>
            <p className={`mb-4 ${textClass}`}>{t.missionContent.para2}</p>
            <p className={textClass}>{t.missionContent.para3}</p>
          </CardContent>
        </Card>

        {/* Guidelines Section */}
        <Card className="mb-8 border-primary/20 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Edit3 className="h-5 w-5 text-primary" />
              <CardTitle className={`text-2xl ${textClass}`}>
                {t.guidelinesTitle}
              </CardTitle>
            </div>
            <CardDescription className={textClass}>
              {t.guidelinesSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3
                  className={`font-semibold text-lg mb-2 text-primary ${textClass}`}
                >
                  {t.guidelines.title1}
                </h3>
                <p className={textClass}>{t.guidelines.content1}</p>
              </div>

              <div>
                <h3
                  className={`font-semibold text-lg mb-2 text-primary ${textClass}`}
                >
                  {t.guidelines.title2}
                </h3>
                <p className={textClass}>{t.guidelines.content2}</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {t.guidelines.formatList.map((item, index) => (
                    <li key={index} className={textClass}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className={`font-semibold text-lg mb-2 text-primary ${textClass}`}
                >
                  {t.guidelines.title3}
                </h3>
                <p className={textClass}>{t.guidelines.content3}</p>
              </div>

              <div>
                <h3
                  className={`font-semibold text-lg mb-2 text-primary ${textClass}`}
                >
                  {t.guidelines.title4}
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {t.guidelines.topicsList.map((item, index) => (
                    <li key={index} className={textClass}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Message */}
        <Card className="mb-8 border-primary/20 shadow-md bg-primary/5">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <CardTitle className={`text-2xl ${textClass}`}>
                {t.welcomeTitle}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className={`text-center italic text-lg mb-4 ${textClass}`}>
              "{t.welcomeQuote}"
              <span
                className={`block text-sm mt-1 text-muted-foreground ${textClass}`}
              >
                {t.welcomeQuoteAuthor}
              </span>
            </p>
            <p className={`mb-4 ${textClass}`}>{t.welcomeContent.para1}</p>
            <p className={`font-medium ${textClass}`}>
              {t.welcomeContent.para2}
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground text-sm mb-8">
          <p className={textClass}>
            {t.footer.copyright} {new Date().getFullYear()}
          </p>
          <p className={textClass}>{t.footer.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
