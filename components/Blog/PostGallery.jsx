"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/Blog/PostCard";

const PostGallery = ({ categoryList, allPageProps }) => {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const filteredPosts = allPageProps.filter((post) => {
  //   if (selectedCategory === "All") return true;
  //   return post.category.includes(selectedCategory);
  // });
  return (
    <section>
      <h1>hi</h1>
      {/* <div className="md:flex justify-between items-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-medium font-serif pb-4">
          Choose a category
        </h1>
        <ul>
          {Array.from(categoryList).map((category) => {
            return (
              <Button
                key={category}
                className={cn(
                  "mr-3 mb-3",
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : null
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            );
          })}
        </ul>
      </div>
      <div>
        {filteredPosts.map((post) => {
          return <PostCard key={post.id} pageProps={post} />;
        })}
      </div> */}
    </section>
  );
};

export default PostGallery;
