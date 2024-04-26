import BLOG from "@/blog.config";
import getAllPageProps from "@/lib/notion/getAllPageProps";

const filterPages = async (filter = { tags: "", category: "" }) => {
  const allPageProps = await getAllPageProps(BLOG.NOTION_PAGE_ID);
  let filteredPages = [];
};

export default filterPages;
