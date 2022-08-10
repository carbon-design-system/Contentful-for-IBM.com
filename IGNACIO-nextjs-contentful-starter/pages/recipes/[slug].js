import dynamic from 'next/dynamic';
import * as contentful from '../../utils/contentful';

const ContentBlock = dynamic(import('../../components/ContentBlock'), { ssr: false })
const Card = dynamic(import('../../components/Card'), { ssr: false })

export default function Recipes({page}) {
  console.log(page)

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

export async function getStaticPaths() {
  const pages = await contentful.client
    .getEntries({
      content_type: 'page',
    })

  const paths = pages.items.map(product => ({
    params: {
      slug: product.fields.slug
    }
  }))

  console.log("paths: ", paths)

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps(context) {

  console.log("context: ", context)
  // Get data from headless CMS
  const client = context.preview
    ? contentful.previewClient
    : contentful.client

  const query = {
    limit: 1,
    include: 10,
    'fields.slug': context.params.slug,
    content_type: 'page',
  };

  const res = await client.getEntries(query);

  return {
    props: {
      preview: context.preview || false,
      page: res.items[0]
    }
  }
}
