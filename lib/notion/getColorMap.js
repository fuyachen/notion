import getRecordMap from "./getRecordMap";

export default async function getColorMap(databaseId, prop) {
  const recordMap = await getRecordMap(databaseId);
  const schema = Object.values(recordMap?.collection)[0]?.value?.schema;
  if (!schema) return "No schema found";
  const colorMap = {};

  for (const [key, value] of Object.entries(schema)) {
    const { name, type, ...rest } = value;
    if (type === "select" || type === "multi_select") {
      colorMap[name] = new Map();
      value.options.map((option) => {
        const { color, value } = option;
        colorMap[name].set(value, color);
      });
    }
  }
  return colorMap[prop];
}

/**
 * colorMap:
{
  category: Map(4) {
    'Programming' => 'blue',
    'PKM' => 'green',
    'Mood' => 'red',
    'AI' => 'brown'
  },
  type: Map(3) { 'Post' => 'brown', 'Page' => 'purple', 'Widget' => 'gray' },
  tags: Map(8) {
    'JavaScript' => 'orange',
    'TailwindCSS' => 'blue',
    'Obsidian' => 'purple',
    '旅行' => 'yellow',
    '数据库' => 'brown',
    'Notion' => 'blue',
    'new' => 'pink',
    'ChatGPT' => 'green'
  }
}
 */
