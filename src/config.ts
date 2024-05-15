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
    href: "https://github.com/at-wr",
    linkTitle: `Me on GitHub`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "https://example.com",
    linkTitle: `Send an email to me`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Wr_Offi",
    linkTitle: `Me on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Me on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/WrOffi",
    linkTitle: `Me on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://fedist.me/@wr",
    linkTitle: `Me on Mastodon`,
    active: true,
  },
];
