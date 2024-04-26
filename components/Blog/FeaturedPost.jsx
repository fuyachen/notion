import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import DateTags from "./DateTags";
import Link from "next/link";

const FeaturedPost = async ({ pageProps, className }) => {
  const { cover, id, title, category, tags, description, publishedAt } =
    pageProps;

  return (
    <article
      className={cn(
        "relative w-full h-[55vh] min-h-60 max-h-[32rem] p-3 sm:p-5 flex flex-col justify-end items-start gap-4 rounded-xl overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-0% to-black/80" />
      <Image
        src={cover}
        fill
        alt={title}
        className="object-center object-cover -z-10"
        priority
      />
      <div className="space-y-4 text-[#fffdfa] z-0">
        <Button variant="outline">{category?.[0]}</Button>
        <h1 className="text-xl sm:text-2xl font-medium cursor-pointer hover:underline hover:underline-offset-4 transition-all">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h1>
        {/* <p className="hidden sm:block sm:text-lg whitespace-nowrap">
          {description}
        </p> */}
        <DateTags publishedAt={publishedAt} tags={tags} />
      </div>
    </article>
  );
};

export default FeaturedPost;
