import dynamic from 'next/dynamic';
import DDSContentSection from '@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section';
import DDSContentSectionHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js';

const CardGroup = dynamic(import('./CardGroup'), { ssr: false })

export default function CardSection(content) {  
	const { heading, cardGroup  } = content?.fields || {};
  return (
    <DDSContentSection>
      <DDSContentSectionHeading>{heading}</DDSContentSectionHeading>
			<CardGroup {...cardGroup} />
    </DDSContentSection>
  );
}