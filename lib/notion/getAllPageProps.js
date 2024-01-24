import getAllPageIds from "./getAllPageIds";
import getPageProps from "./getPageProps";

const getAllPageProps = async (databaseId) => {
  const pageIds = await getAllPageIds(databaseId);
  const allPageProps = await Promise.all(
    pageIds.map(async (pageId) => {
      const pageProps = await getPageProps(pageId);
      return pageProps;
    })
  );
  return allPageProps;
};

export default getAllPageProps;

/**
 * 
 [
  {
    id: 'c9fca5a8-f115-4927-a9b4-1e1ba7fe814c',
    createdAt: 'October 16, 2023',
    updatedAt: 'January 24, 2024',
    cover: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
    category: [ 'PKM' ],
    description: '从 Promise 的诞生背景，到状态机制，链式调用以及错误处理，一篇文章帮你搞定 Promise',
    publishedAt: { start_date: '2023-10-16' },
    type: [ 'Post' ],
    slug: 'javascript-promise',
    featured: true,
    tags: [ 'JavaScript', 'Notion' ],
    author: [ [Object] ],
    status: 'Published',
    title: '一文搞定 Promise'
  },
  {
    id: 'db62e150-1d29-478b-ac39-5478967a855d',
    createdAt: 'October 25, 2023',
    updatedAt: 'January 24, 2024',
    cover: 'https://www.notion.so/images/page-cover/nasa_wrights_first_flight.jpg',
    category: [ 'AI' ],
    description: '分栏测试哈哈分栏测试哈哈分栏测试哈哈分栏测试',
    publishedAt: { start_date: '2023-08-25' },
    slug: 'column-test',
    tags: [ 'ChatGPT' ],
    status: 'Published',
    title: '分栏测试'
  },
  {
    id: 'd24346f8-4c36-458e-87c1-8bf9ddb987f3',
    createdAt: 'January 8, 2024',
    updatedAt: 'January 24, 2024',
    cover: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/90a1b767-f0ad-4bab-963f-31b4f474a40c/5288f245-9cd5-4c41-bc51-4c5222b1c879/Alixe_Lay_travel_10.jpg',
    category: [ 'Mood' ],
    description: '我是一名前端开发工程师',
    publishedAt: { start_date: '2024-01-24' },
    type: [ 'Page' ],
    slug: 'about',
    tags: [ 'new' ],
    title: '关于我'
  },
  {
    id: '39234420-fe8e-4186-9bce-3e3f6c317c38',
    createdAt: 'January 8, 2024',
    updatedAt: 'January 24, 2024',
    cover: null,
    category: [ 'AI' ],
    description: '小组件测试',
    publishedAt: { start_date: '2024-01-24' },
    type: [ 'Widget' ],
    slug: 'widget',
    tags: [ 'ChatGPT' ],
    status: 'Draft',
    title: '小组件'
  }
]
 */
