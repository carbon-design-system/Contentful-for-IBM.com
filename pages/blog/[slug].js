import dynamic from "next/dynamic";
import * as contentful from "../../utils/contentful";

import DDSUniversalBanner from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner";
import DDSUniversalBannerHeading from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner-heading";
import DDSUniversalBannerCopy from "@carbon/ibmdotcom-web-components/es/components-react/universal-banner/universal-banner-copy";

import DDSTagGroup from "@carbon/ibmdotcom-web-components/es/components-react/tag-group/tag-group";
import DDSTagLink from "@carbon/ibmdotcom-web-components/es/components-react/tag-link/tag-link";

import DDSQuote from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote";

export default function Pages(props) {
  const { body, tags, title } = props.page?.fields;

  console.log("body", props);

  return (
    <div className="bx--universal-banner-layout-container">
      {body.content.map((_contentElement) => (
        <p>{_contentElement.content[0].value}</p>
      ))}

      <DDSQuote color-scheme="regular">
        {title}

        {/* <dds-quote-source-heading>
          Lorem ipsum dolor sit amet
        </dds-quote-source-heading>
        <dds-quote-source-copy>
          consectetur adipiscing elit
        </dds-quote-source-copy>
        <dds-quote-source-bottom-copy>IBM Cloud</dds-quote-source-bottom-copy>
        <dds-link-with-icon slot="footer" href="https://example.com">
          Link with Icon
          <svg
            slot="icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
          </svg>
        </dds-link-with-icon> */}
      </DDSQuote>

      {/* 
      <DDSUniversalBanner>
        <DDSUniversalBannerHeading slot="heading">
          Hybrid cloud and AI for smarter business
        </DDSUniversalBannerHeading>

        <DDSUniversalBannerCopy slot="copy">
          Las Vegas, June 15-18, 2025
        </DDSUniversalBannerCopy>
      </DDSUniversalBanner> */}

      <DDSTagGroup>
        {tags.map((tag) => (
          <DDSTagLink>{tag}</DDSTagLink>
        ))}
      </DDSTagGroup>
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await contentful.client.getEntries({
    content_type: "blogPost",
  });

  const paths = pages.items.map((product) => ({
    params: {
      slug: product.fields.slug,
    },
  }));

  console.log("paths: ", paths);

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  console.log("context: ", context);
  // Get data from headless CMS
  const client = context.preview ? contentful.previewClient : contentful.client;

  const query = {
    limit: 1,
    include: 10,
    "fields.slug": context.params.slug,
    content_type: "blogPost",
  };

  const res = await client.getEntries(query);

  return {
    props: {
      preview: context.preview || false,
      page: res.items[0],
    },
  };
}
