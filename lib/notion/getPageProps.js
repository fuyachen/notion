import { getTextContent, getDateValue, idToUuid } from "notion-utils";
import { NotionAPI } from "notion-client";
import formatDate from "../formatDate";
import notion from "./notion";
import BLOG from "@/blog.config";

export default async function getPageProps(id) {
  const recordMap = await notion.getPage(id.replace(/-/g, ""));
  // const id = idToUuid(pageId);
  const metadata = recordMap?.block?.[id]?.value;
  if (metadata?.type !== "page") return "invalid page type";

  const rawProperties = metadata.properties || [];
  const excludeProperties = [
    "date",
    "select",
    "multi_select",
    "person",
    "file",
    "checkbox", // change "Yes" to boolean
  ];

  const pageProps = {};
  pageProps.id = id;
  pageProps.createdAt = formatDate(metadata.created_time);
  pageProps.updatedAt = formatDate(metadata.last_edited_time);
  pageProps.cover = mapImgUrl(metadata.format?.page_cover);

  const schema = Object.values(recordMap.collection)[0]?.value?.schema;
  const api = new NotionAPI();

  for (const [key, val] of Object.entries(rawProperties)) {
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      pageProps[schema[key].name] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case "file": {
          try {
            const Block = recordMap.block?.[id].value;
            const url = val[0][1][0][1];
            const newurl = customMapImageUrl(url, Block);
            pageProps[schema[key].name] = newurl;
          } catch (error) {
            pageProps[schema[key].name] = undefined;
          }
          break;
        }
        case "date": {
          const dateProperty = getDateValue(val);
          delete dateProperty.type;
          // only keep the start_date
          pageProps[schema[key].name] = dateProperty.start_date;
          break;
        }
        case "select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            pageProps[schema[key].name] = selects.split(",");
          }
          break;
        }
        case "multi_select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            pageProps[schema[key].name] = selects.split(",");
          }
          break;
        }
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
          pageProps[schema[key].name] = users;
          break;
        }
        case "checkbox": {
          pageProps[schema[key].name] = val[0][0] === "Yes" ? true : false;
          break;
        }
        default:
          break;
      }
    }
  }

  return pageProps;
}

const mapImgUrl = (img) => {
  if (!img) {
    return null;
  }
  let ret = null;
  // 相对目录，则视为notion的自带图片
  if (img.startsWith("/")) {
    ret = BLOG.NOTION_HOST + img;
  } else {
    ret = img;
  }

  return ret;

  // Notion 图床转换为永久地址
  // const isNotionImg = ret.indexOf('secure.notion-static.com') > 0
  // const isImgBlock = BLOG.IMG_URL_TYPE === 'Notion' || type !== 'block'
  // if (isNotionImg && isImgBlock) {
  //   ret = BLOG.NOTION_HOST + '/image/' + encodeURIComponent(ret) + '?table=' + type + '&id=' + block.id
  // }
};

/**
 * 
  {
    id: 'c9fca5a8-f115-4927-a9b4-1e1ba7fe814c',
    createdAt: 'October 16, 2023',
    updatedAt: 'January 23, 2024',
    cover: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    category: [ 'PKM' ],
    description: '从 Promise 的诞生背景，到状态机制，链式调用以及错误处理，一篇文章帮你搞定 Promise',
    publishedAt: { start_date: '2023-10-16' },
    type: [ 'Post' ],
    slug: 'javascript-promise',
    featured: true,
    tags: [ 'JavaScript', 'Notion' ],
    author: [
      {
        id: '7f96f208-218e-446e-a832-68a8c22b6fac',
        name: 'Achen',
        profile_photo: 'https://s3-us-west-2.amazonaws.com/public.notion-static.com/49ca4f3b-41f5-433f-bd2c-f6a5d45008d8/4059769.png'
      }
    ],
    status: 'Published',
    title: '一文搞定 Promise'
  }
 */
