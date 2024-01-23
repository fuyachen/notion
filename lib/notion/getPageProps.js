import { getTextContent, getDateValue } from "notion-utils";
import { NotionAPI } from "notion-client";

/**
 *
 * @param {*notion page id} id
 * @param {*} recordMap
 * @returns {{
 *   id: string,
 *   category: string[],
 *   description: string,
 *   date: { start_date: string },
 *   type: string[],
 *   slug: string,
 *   featured: boolean,
 *   tags: string[],
 *   status: string,
 *   title: string
 * }}
 */
async function getPageProps(id, recordMap) {
  const api = new NotionAPI();
  const schema = getSchema(recordMap);
  id = idToUuid(id);
  const rawProperties = Object.entries(
    recordMap?.block?.[id]?.value?.properties || []
  );
  const excludeProperties = [
    "date",
    "select",
    "multi_select",
    "person",
    "file",
    "checkbox",
  ];

  const properties = {};
  properties.id = id;

  rawProperties.map(async ([key, val]) => {
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case "file": {
          try {
            const Block = recordMap.block?.[id].value;
            const url = val[0][1][0][1];
            const newurl = customMapImageUrl(url, Block);
            properties[schema[key].name] = newurl;
          } catch (error) {
            properties[schema[key].name] = undefined;
          }
          break;
        }
        case "date": {
          const dateProperty = getDateValue(val);
          delete dateProperty.type;
          properties[schema[key].name] = dateProperty;
          break;
        }
        case "select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",");
          }
          break;
        }
        case "multi_select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",");
          }
          break;
        }
        // BUG: person type is not working
        case "person": {
          const rawUsers = val.flat();

          const users = [];
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0];
              const res = await api.getUsers(userId);
              const resValue =
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value;
              const user = {
                id: resValue?.id,
                name:
                  resValue?.name ||
                  `${resValue?.family_name}${resValue?.given_name}` ||
                  undefined,
                profile_photo: resValue?.profile_photo || null,
              };
              users.push(user);
            }
          }
          properties[schema[key].name] = users;
          break;
        }
        case "checkbox": {
          properties[schema[key].name] = val[0][0] === "Yes" ? true : false;
          break;
        }
        default:
          break;
      }
    }
  });
  return properties;
}

const getSchema = (recordMap) => {
  const collection = Object.values(recordMap.collection)[0]?.value;
  if (!collection) return "No collection found";
  return collection.schema;
};

const idToUuid = (id = "") =>
  `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`;

export default getPageProps;

/**
 * 
{
  id: 'c9fca5a8-f115-4927-a9b4-1e1ba7fe814c',
  category: [ 'Programming' ],
  description: '从Promise的诞生背景，到状态机制，链式调用以及错误处理，一篇文章帮你搞定Promise',
  date: { start_date: '2023-10-16' },
  type: [ 'Post' ],
  slug: 'javascript-promise',
  featured: true,
  tags: [ 'JavaScript' ],
  status: 'Published',
  title: '一文搞定Promise'
}
 */
