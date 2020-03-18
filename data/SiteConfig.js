const config = {
  siteTitle: "Life Hacks", // Site title.
  siteTitleShort: "Life Hacks", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Share your life hacks!", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://life-hacks.app", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A social web site for users to share their life hacks", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "2635630236513769", // FB Application ID for using app insights
  siteGATrackingID: "UA-32696506-3", // Tracking code ID for google analytics.
  disqusShortname: "life-hacks-1", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Hunk Chen", // Username to display in the author segment.
  userEmail: "hunkrulez777@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "almandsky", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bay Area, CA, United States", // User location to display in the author segment.
  userAvatar: "https://avatars1.githubusercontent.com/u/62268994?v=4&s=460", // User avatar to display in the author segment.
  userDescription:
    "Pro gamer, pokemon master, math wizard", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/almandsky/life-hacks",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/almandsky",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:hunkrulez777@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Hunk Chen" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
