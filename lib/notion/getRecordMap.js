import notion from "./notion";

export default async function getRecordMap(id) {
  const recordMap = await notion.getPage(id);
  return recordMap;
}
