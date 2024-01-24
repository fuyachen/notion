const BLOG = {
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
  NOTION_HOST: process.env.NOTION_HOST || "https://www.notion.so",
  ISDEV: "development" || !process.env.NODE_ENV,
};

export default BLOG;
