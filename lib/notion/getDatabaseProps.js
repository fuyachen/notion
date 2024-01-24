import notion from "./notion";

export default async function getDatabaseProps(databaseId) {
  const recordMap = await notion.getPage(databaseId);
  const databaseProps = {};
  const databaseKeys = [];

  const schema = Object.values(recordMap?.collection)[0]?.value?.schema;
  if (!schema) return "No schema found";
  for (const [key, value] of Object.entries(schema)) {
    const { name, type, ...rest } = value;
    databaseProps[name] = {
      type,
      ...rest,
    };
    databaseKeys.push(name);
  }

  return { databaseProps, databaseKeys };
}

/**
 * @returns 
 * databaseKeys:

[
  'category', 'description',
  'date',     'type',
  'slug',     'featured',
  'tags',     'Created by',
  'status',   'title'
]

 * databaseProps:

{
  category: {
    type: 'select',
    options: [
      {
        id: '52afc73d-30c4-4f3b-8f70-1b1046a413d7',
        color: 'blue',
        value: 'Programming'
      },
      {
        id: '7261528a-39ad-4e2f-8426-cc3d2dfdf3fe',
        color: 'brown',
        value: 'AI'
      }
    ]
  },
  description: { type: 'text' },
  date: { type: 'date', date_format: 'YYYY/MM/DD' },
  type: {
    type: 'select',
    options: [
      { id: 'DQ=q', color: 'brown', value: 'Post' }
    ]
  },
  slug: { type: 'text' },
  featured: { type: 'checkbox' },
  tags: {
    type: 'multi_select',
    options: [
      {
        id: '757c6f92-84e2-4f3a-a729-55e32cfbbd3c',
        color: 'orange',
        value: 'JavaScript'
      },
      {
        id: '57423275-105c-4613-9875-78d2b1fb38cc',
        color: 'blue',
        value: 'TailwindCSS'
      }
    ]
  },
  'Created by': { type: 'person' },
  status: {
    type: 'status',
    groups: [
      {
        id: '756a1de2-a98c-4b17-b11d-dd39ecd85b95',
        name: 'To-do',
        color: 'gray',
        optionIds: [ '62646c47-f061-4564-ba5d-e73d97980fbf' ]
      },
      {
        id: '91681a9b-65df-4161-a30e-8ffb8b6c2767',
        name: 'In progress',
        color: 'blue',
        optionIds: [ '34a34c99-a436-4cd9-8d0f-d6c723caf45d' ]
      },
      {
        id: '9b7ec548-8810-4749-a875-6ec7f4bf8eab',
        name: 'Complete',
        color: 'green',
        optionIds: [ '388fb9b3-4012-4c5f-94ed-92ca543bdfa9' ]
      }
    ],
    options: [
      {
        id: '62646c47-f061-4564-ba5d-e73d97980fbf',
        value: 'Not started'
      },
      {
        id: '34a34c99-a436-4cd9-8d0f-d6c723caf45d',
        color: 'blue',
        value: 'Draft'
      },
      {
        id: '388fb9b3-4012-4c5f-94ed-92ca543bdfa9',
        color: 'green',
        value: 'Published'
      }
    ],
    defaultOption: 'Not started'
  },
  title: { type: 'title' }
}
 */
