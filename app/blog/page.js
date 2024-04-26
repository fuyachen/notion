import BLOG from "@/blog.config";
// import FeaturedPost from "@/components/Blog/FeaturedPost";
import PostGallery from "@/components/Blog/PostGallery";
// import PostList from "@/components/Blog/PostList";
import getAllPageProps from "@/lib/notion/getAllPageProps";

const Blog = async () => {
  const allPageProps = await getAllPageProps(BLOG.NOTION_PAGE_ID);
  let featuredPost;
  let latestPosts = [];
  let categoryList = new Set();
  categoryList.add("All");
  allPageProps.forEach((pageProps) => {
    if (pageProps.featured) {
      featuredPost = pageProps;
    } else {
      latestPosts.push(pageProps);
    }
    categoryList.add(pageProps.category[0]);
  });
  categoryList = Array.from(categoryList);
  return (
    <>
      <h1>Blog</h1>
      {/* <div className="w-full md:flex gap-16 mb-12">
        <FeaturedPost pageProps={featuredPost} className="flex-[3]" />
        <section className="flex-[2] md:max-w-[33.33%] flex flex-col mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-medium pb-4 border-b border-foreground font-serif">
            Latest Post
          </h1>
          {latestPosts.map((pageProps) => {
            return <PostList key={pageProps.id} pageProps={pageProps} />;
          })}
        </section>
      </div> */}
      <PostGallery categoryList={categoryList} allPageProps={allPageProps} />
    </>
  );
};

export default Blog;
