import { rootNotionPageId } from "@/blog.config";
import NotionPage from "@/components/Post/NotionRenderer.jsx";
import BlogHeader from "@/components/Post/PostHeader.jsx";
import { getRecordMap, getPageProps, getAllPageIds } from "@/lib/notion";

const Blog = async ({ params }) => {
  const pageId = params.slug;
  const PageRecordMap = await getRecordMap(pageId);
  const pageProps = await getPageProps(pageId, PageRecordMap);

  return (
    <article className="flex justify-center items-center flex-col max-w-[720px] m-auto">
      <BlogHeader pageProps={pageProps} />
      <NotionPage
        recordMap={PageRecordMap}
        schema={{ darkMode: false, collection: false }}
      />
    </article>
  );
};

export default Blog;
