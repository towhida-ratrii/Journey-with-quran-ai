// English and Bangla translations for the Guide Page

export type Translation = {
  title: string;
  subtitle: string;
  missionTitle: string;
  missionSubtitle: string;
  missionContent: {
    para1: string;
    para2: string;
    para3: string;
  };
  guidelinesTitle: string;
  guidelinesSubtitle: string;
  guidelines: {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    formatList: string[];
    title3: string;
    content3: string;
    title4: string;
    topicsList: string[];
  };
  welcomeTitle: string;
  welcomeQuote: string;
  welcomeQuoteAuthor: string;
  welcomeContent: {
    para1: string;
    para2: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
};

export const translations: Record<"en" | "bn", Translation> = {
  en: {
    title: "Journey with Quran",
    subtitle: "Your guide to meaningful engagement",
    missionTitle: "Our Mission",
    missionSubtitle: "Why we created this platform",
    missionContent: {
      para1:
        "Journey with Quran is a dedicated space for Muslims around the world to connect, learn, and grow together through the wisdom of the Holy Quran and Hadith.",
      para2:
        "Our platform aims to foster a community where knowledge is shared, questions are welcomed, and spiritual growth is nurtured. We believe that understanding the Quran is a lifelong journey best traveled together.",
      para3:
        "Whether you're a scholar or just beginning your relationship with the Quran, this space is for you to find inspiration, guidance, and community support on your path.",
    },
    guidelinesTitle: "Posting Guidelines",
    guidelinesSubtitle: "How to contribute effectively",
    guidelines: {
      title1: "1. Share Knowledge Respectfully",
      content1:
        "When sharing interpretations or explanations, do so with humility and respect for different viewpoints. Cite reliable sources when possible.",
      title2: "2. Format Your Posts",
      content2: "For clarity and readability:",
      formatList: [
        "Use proper formatting for Quranic verses (include surah name and verse number)",
        "For Hadith, mention the collection and narrator",
        "Break long posts into paragraphs",
        "Use the preview feature before posting",
      ],
      title3: "3. Engage Constructively",
      content3:
        "When commenting on others' posts, focus on adding value through thoughtful questions or insights. Avoid criticism without constructive feedback.",
      title4: "4. Topics to Share",
      topicsList: [
        "Personal reflections on verses or hadiths",
        "Questions about interpretation or application",
        "Scholarly explanations (with proper attribution)",
        "How Quranic teachings apply to contemporary life",
        "Beautiful recitations or calligraphy (with proper credits)",
      ],
    },
    welcomeTitle: "Welcome to Our Community",
    welcomeQuote:
      "The best among you are those who learn the Quran and teach it to others.",
    welcomeQuoteAuthor: "— Prophet Muhammad (peace be upon him)",
    welcomeContent: {
      para1:
        "We're delighted to have you join our community. Your presence enriches our collective journey of learning and growth. Remember that every question is valuable, every insight is a gift, and every member is an essential part of this community.",
      para2:
        "May this platform be a source of knowledge, inspiration, and connection for you. Let's embark on this beautiful journey with the Quran together.",
    },
    footer: {
      copyright: "Journey with Quran ©",
      tagline: "A space for learning, reflection, and community",
    },
  },
  bn: {
    title: "কোরআনের সাথে যাত্রা",
    subtitle: "অর্থপূর্ণ সম্পৃক্ততার জন্য আপনার গাইড",
    missionTitle: "আমাদের লক্ষ্য",
    missionSubtitle: "আমরা কেন এই প্ল্যাটফর্ম তৈরি করেছি",
    missionContent: {
      para1:
        "কোরআনের সাথে যাত্রা হল বিশ্বজুড়ে মুসলিমদের জন্য একটি নিবেদিত স্থান যেখানে তারা পবিত্র কোরআন এবং হাদিসের জ্ঞানের মাধ্যমে একসাথে সংযোগ, শিক্ষা এবং বৃদ্ধি পেতে পারে।",
      para2:
        "আমাদের প্ল্যাটফর্মের লক্ষ্য এমন একটি সম্প্রদায় গড়ে তোলা যেখানে জ্ঞান ভাগ করে নেওয়া হয়, প্রশ্নকে স্বাগত জানানো হয় এবং আধ্যাত্মিক বৃদ্ধিকে লালন করা হয়। আমরা বিশ্বাস করি যে কোরআন বোঝা একটি আজীবন যাত্রা যা একসাথে ভ্রমণ করা সবচেয়ে ভালো।",
      para3:
        "আপনি একজন পণ্ডিত হোন বা কোরআনের সাথে আপনার সম্পর্ক শুরু করুন, এই স্থানটি আপনার পথে অনুপ্রেরণা, নির্দেশনা এবং সম্প্রদায়ের সমর্থন খুঁজে পাওয়ার জন্য।",
    },
    guidelinesTitle: "পোস্টিং নির্দেশিকা",
    guidelinesSubtitle: "কীভাবে কার্যকরভাবে অবদান রাখবেন",
    guidelines: {
      title1: "১. সম্মানের সাথে জ্ঞান ভাগ করুন",
      content1:
        "ব্যাখ্যা বা ব্যাখ্যা ভাগ করার সময়, বিনয় এবং বিভিন্ন দৃষ্টিকোণের প্রতি সম্মান দেখিয়ে তা করুন। সম্ভব হলে নির্ভরযোগ্য উৎস উল্লেখ করুন।",
      title2: "২. আপনার পোস্ট ফরম্যাট করুন",
      content2: "স্পষ্টতা এবং পাঠযোগ্যতার জন্য:",
      formatList: [
        "কোরআনিক আয়াতের জন্য সঠিক ফরম্যাটিং ব্যবহার করুন (সূরার নাম এবং আয়াত নম্বর অন্তর্ভুক্ত করুন)",
        "হাদিসের জন্য, সংগ্রহ এবং বর্ণনাকারীর উল্লেখ করুন",
        "দীর্ঘ পোস্টগুলিকে অনুচ্ছেদে ভাগ করুন",
        "পোস্ট করার আগে প্রিভিউ ফিচার ব্যবহার করুন",
      ],
      title3: "৩. গঠনমূলকভাবে জড়িত হন",
      content3:
        "অন্যদের পোস্টে মন্তব্য করার সময়, চিন্তাশীল প্রশ্ন বা অন্তর্দৃষ্টির মাধ্যমে মূল্য যোগ করার উপর ফোকাস করুন। গঠনমূলক প্রতিক্রিয়া ছাড়া সমালোচনা এড়িয়ে চলুন।",
      title4: "৪. ভাগ করার বিষয়",
      topicsList: [
        "আয়াত বা হাদিস সম্পর্কে ব্যক্তিগত প্রতিফলন",
        "ব্যাখ্যা বা প্রয়োগ সম্পর্কে প্রশ্ন",
        "পণ্ডিতদের ব্যাখ্যা (সঠিক অ্যাট্রিবিউশন সহ)",
        "সমসাময়িক জীবনে কোরআনিক শিক্ষা কীভাবে প্রযোজ্য",
        "সুন্দর তেলাওয়াত বা ক্যালিগ্রাফি (সঠিক ক্রেডিট সহ)",
      ],
    },
    welcomeTitle: "আমাদের সম্প্রদায়ে স্বাগতম",
    welcomeQuote: "তোমাদের মধ্যে সেরা তারা যারা কোরআন শেখে এবং অন্যদের শেখায়।",
    welcomeQuoteAuthor: "— হযরত মুহাম্মদ (সাঃ)",
    welcomeContent: {
      para1:
        "আমরা আপনাকে আমাদের সম্প্রদায়ে যোগদান করতে পেরে আনন্দিত। আপনার উপস্থিতি আমাদের সম্মিলিত শিক্ষা ও বৃদ্ধির যাত্রাকে সমৃদ্ধ করে। মনে রাখবেন যে প্রতিটি প্রশ্ন মূল্যবান, প্রতিটি অন্তর্দৃষ্টি একটি উপহার, এবং প্রতিটি সদস্য এই সম্প্রদায়ের একটি অপরিহার্য অংশ।",
      para2:
        "এই প্ল্যাটফর্মটি আপনার জন্য জ্ঞান, অনুপ্রেরণা এবং সংযোগের উৎস হোক। আসুন আমরা একসাথে কোরআনের সাথে এই সুন্দর যাত্রা শুরু করি।",
    },
    footer: {
      copyright: "কোরআনের সাথে যাত্রা ©",
      tagline: "শিক্ষা, প্রতিফলন এবং সম্প্রদায়ের জন্য একটি স্থান",
    },
  },
};
