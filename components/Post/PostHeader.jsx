import Image from "next/image";
import { LeftArrow } from "../Icons";

const BlogHeader = ({ pageProps }) => {
  const { cover, category, description, date, tags, title } = pageProps;
  return (
    <header className="w-full">
      <div
        id="category-container"
        className="group w-full h-6 flex justify-start items-center font-normal text-slate-700 text-lg cursor-pointer"
      >
        <div
          id="back_to_category"
          className="mr-2 flex justify-center items-center"
        >
          <LeftArrow />
        </div>
        <div
          id="category"
          className="group-hover:border-slate-700 group-hover:border-b-[1px] transition-all"
        >
          {category[0]}
        </div>
      </div>
      <h1
        id="blog_title"
        className="text-3xl md:text-5xl font-medium mt-8 tracking-wider"
      >
        {title}
      </h1>
      <div
        id="blog_tags"
        className="w-full flex justify-start items-center gap-4 my-8"
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="border-[1px] rounded-full px-3 py-[1px] border-slate-700"
          >
            {tag}
          </div>
        ))}
      </div>
      <h2
        id="blog_desc"
        className="text-lg md:text-xl font-medium my-5 tracking-wide"
      >
        {description}
      </h2>
      <figure
        id="blog_cover"
        className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8"
      >
        <Image src={cover} alt="medium" fill />
      </figure>
    </header>
  );
};

export default BlogHeader;
