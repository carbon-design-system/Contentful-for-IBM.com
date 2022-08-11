import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20.js';
import DDSCard from '@carbon/ibmdotcom-web-components/es/components-react/card/card';
import DDSCardHeading from '@carbon/ibmdotcom-web-components/es/components-react/card/card-heading';
import DDSCardEyebrow from '@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow';
import DDSCardFooter from '@carbon/ibmdotcom-web-components/es/components-react/card/card-footer';
import DDSImage from '@carbon/ibmdotcom-web-components/es/components-react/image/image';

export default function Card(content) {
	const { image, eyebrow, heading, copy, href, ctaText, altText } = content.fields;
	const { url } = image?.fields?.file || {};

	return (
		<DDSCard href={href}>
			{image && <DDSImage slot="image" alt={altText} defaultSrc={"https:" + url} />}
			{eyebrow && <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>}
			<DDSCardHeading>{heading}</DDSCardHeading>
			{copy && <p>{copy}</p>}
			<DDSCardFooter>
				{ctaText}
				<ArrowRight20 slot="icon" />
			</DDSCardFooter>
		</DDSCard>
  )
}