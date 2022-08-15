import dynamic from 'next/dynamic';
import DDSContentGroup from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group';
import DDSContentGroupHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading';
import DDSContentGroupCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-copy';

const ComponentRenderer = dynamic(import('./ComponentRenderer'), { ssr: false })
const CardLinkCTA = dynamic(import('./CardLinkCTA'), { ssr: false });

export default function ContentBlock(content) {  
	const { heading, copy, children, cta } = content?.fields || {};

	console.log('group', content)

  return (
		<DDSContentGroup>
			<DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
			<DDSContentGroupCopy>{copy}</DDSContentGroupCopy>
			{children?.map(child => {
					return <ComponentRenderer content={child}/>
				})}
			{cta && <CardLinkCTA {...cta}/>}
    </DDSContentGroup>
  );
}