import dynamic from 'next/dynamic';
import {createClient} from 'contentful';
const ContentBlock = dynamic(import('../components/ContentBlock'), { ssr: false })
const Card = dynamic(import('../components/Card'), { ssr: false })

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const query = {
    limit: 1,
    include: 10,
    'fields.slug': 'example-page',
    content_type: 'page',
  };

  const res = await client.getEntries(query);

  return {
    props: {
      page: res.items[0]
    }
  }
}

export default function Recipes({page}) {
  const { body } = page?.fields;

  return (
    <div className="recipe-list">
      {body.map(component => {
        console.log(component)
        const { id } = component.sys.contentType.sys;

        if(id == 'dds-card') {
          return <Card key={component.sys.id} card={component}/>
        }

        if(id == 'dds-content-block') {
          return <ContentBlock key={component.sys.id} contentBlock={component}/>
        }
      })}
    </div>
  )
}