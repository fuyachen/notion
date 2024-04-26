import { Button } from "../ui/button";
import formatDate from "@/lib/formatDate";
import { getColorMap } from "@/lib/notion";
import BLOG from "@/blog.config";

const DateTags = async ({ publishedAt, tags, ...prop }) => {
  const tagsMap = await getColorMap(BLOG.NOTION_PAGE_ID, "tags");
  return (
    <div className="text-sm" {...prop}>
      <span>{formatDate(publishedAt)}</span>
      <span className="mx-3">|</span>
      {tags.map((tag, index) => {
        const tagColor = "--notion-" + tagsMap.get(tag) + "_background";
        return (
          <span key={index} className="pr-2">
            <Button
              size="sm"
              style={{ backgroundColor: `var(${tagColor})` }}
              {...prop}
            >
              {tag}
            </Button>
          </span>
        );
      })}
    </div>
  );
};

export default DateTags;
