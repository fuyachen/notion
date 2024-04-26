"use client";
import Link from "next/link";
import DateTags from "./DateTags";

const PostList = ({ pageProps }) => {
  const { id, title, tags, publishedAt } = pageProps;
  return (
    <Link
      href={`/blog/${id}`}
      className="py-5 border-b border-secondary-foreground hover:translate-x-3 transition-transform ease-in cursor-pointer"
    >
      <h1 className="overflow-hidden text-xl font-medium mb-2 whitespace-nowrap text-ellipsis">
        {title}
      </h1>
      <DateTags tags={tags} publishedAt={publishedAt} className="text-xs" />
    </Link>
  );
};

export default PostList;
