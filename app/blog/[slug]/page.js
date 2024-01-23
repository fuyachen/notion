import { rootNotionPageId } from "@/blog.config";
import notion from "@/lib/notion/notionClient";
import getPageProps from "@/lib/notion/getPageProps";
import NotionPage from "@/components/NotionPage.jsx";
import BlogHeader from "@/components/BlogHeader.jsx";

const Blog = async () => {
  const recordMap = await notion.getPage(rootNotionPageId);
  const pageProps = await getPageProps(rootNotionPageId, recordMap);

  return (
    <article className="flex justify-center items-center flex-col max-w-[720px] m-auto">
      <BlogHeader pageProps={pageProps} />
      <NotionPage recordMap={recordMap} schema={{ darkMode: false }} />
    </article>
  );
};

export default Blog;
