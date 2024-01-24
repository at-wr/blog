import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://wrye.dev/", // replace this with your deployed domain
  author: "Alan Ye",
  desc: "I'm a tech guy who loves coding. This is my personal blog where I write about Web dev, Linux, and other tech or casual stuff.",
  title: "Blog of Wr",
  ogImage: "og-image-default.png",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en", "zh"], // BCP 47 Language Tags. Set this empty [] to use the environment default
  fallback: {
    zh: "en",
  },
  routing: {
    prefixDefaultLocale: false,
  },
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/AlanYe-Dev",
    linkTitle: ` _Wr_ on GitHub`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "https://aka.wrye.dev/mail",
    linkTitle: `Send an email to _Wr_`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Wr_Offi",
    linkTitle: `_Wr_ on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `_Wr_ on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/WrOffi",
    linkTitle: `_Wr_ on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@wrye",
    linkTitle: `_Wr_ on Mastodon`,
    active: true,
  },
];
