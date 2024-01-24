import { idToUuid } from "notion-utils";
import notion from "./notion";

export default async function getAllPageIds(databaseId) {
  const recordMap = await notion.getPage(databaseId);
  const id = idToUuid(databaseId);
  const metadata = recordMap?.block?.[id]?.value;
  if (
    metadata?.type !== "collection_view_page" &&
    metadata?.type !== "collection_view"
  ) {
    return "invalid page type";
  }
  const collectionQuery = recordMap.collection_query;
  const views = Object.values(collectionQuery)[0];

  let pageIds = [];
  const pageSet = new Set();

  Object.values(views).forEach((view) => {
    view?.collection_group_results?.blockIds?.forEach((id) => pageSet.add(id));
  });

  pageIds = [...pageSet];

  return pageIds;
}
