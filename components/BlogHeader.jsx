import Image from "next/image";

const BlogHeader = ({ pageProps }) => {
  const { category, description, date, tags, title } = pageProps;
  return (
    <header className="w-full px-4">
      <div
        id="category-container"
        className="group w-full h-6 flex justify-start items-center font-normal text-slate-700 mt-8 text-lg cursor-pointer "
      >
        <div
          id="back_to_category"
          className="mr-2 flex justify-center items-center"
        >
          <svg
            width={20}
            height={20}
            fill="rgba(51,65,85)"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.000,32.000 C7.178,32.000 -0.000,24.822 -0.000,16.000 C-0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.000,17.000 L11.414,17.000 L13.707,19.293 C14.098,19.684 14.098,20.316 13.707,20.707 C13.512,20.902 13.256,21.000 13.000,21.000 C12.744,21.000 12.488,20.902 12.293,20.707 L8.293,16.707 C8.201,16.615 8.128,16.505 8.077,16.382 C7.976,16.138 7.976,15.862 8.077,15.618 C8.128,15.495 8.201,15.385 8.293,15.293 L12.293,11.293 C12.684,10.902 13.316,10.902 13.707,11.293 C14.098,11.684 14.098,12.316 13.707,12.707 L11.414,15.000 L23.000,15.000 C23.552,15.000 24.000,15.448 24.000,16.000 C24.000,16.552 23.552,17.000 23.000,17.000 Z"></path>
            </g>
          </svg>
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
        className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8"
      >
        <Image
          src="https://images.ctfassets.net/co0pvta7hzrh/3qKbk2w4lYOVtB3z4nDCK7/da0acf8c1ede1f0cdd561e15433a21ef/blog_cover_21.png?fm=webp&q=75&fm=webp&q=75&w=960"
          alt="medium"
          fill
        />
      </figure>
    </header>
  );
};

export default BlogHeader;
