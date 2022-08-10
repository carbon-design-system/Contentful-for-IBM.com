import dynamic from 'next/dynamic';
import DDSContentBlock from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block.js';
import DDSContentBlockHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading';
import DDSContentBlockCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy';
const CardLinkCTA = dynamic(import('../components/CardLinkCTA'), { ssr: false });

export default function ContentBlock({ contentBlock }) {
	const { heading, copy, border, children } = contentBlock.fields || {};

  console.log('children', children)

  return (
    <DDSContentBlock complementary-style-scheme={border ? 'with-border' : ''}>
      <DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      <DDSContentBlockCopy>{copy}</DDSContentBlockCopy>
      {children?.[0] && <CardLinkCTA cardLinkCTA={children[0]}/>}
    </DDSContentBlock>
  );
}