import BLOG from "@/blog.config";
import FeaturedPost from "@/components/Blog/FeaturedPost";
import getAllPageProps from "@/lib/notion/getAllPageProps";
import Link from "next/link";

const Blog = async () => {
  const allPageProps = await getAllPageProps(BLOG.NOTION_PAGE_ID);
  const featuredPost = allPageProps.find((page) => page.featured);
  return (
    <section className="w-full flex flex-col">
      <FeaturedPost pageProps={featuredPost} />
      {allPageProps.map(({ id, slug }) => {
        return (
          <div key={id}>
            <Link href={`/blog/${slug}`} as={`/blog/${id}`}>
              {id}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
