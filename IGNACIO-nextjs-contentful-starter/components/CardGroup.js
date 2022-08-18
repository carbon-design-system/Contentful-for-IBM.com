import DDSCardGroup from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group.js';
import DDSCardGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item.js';
import DDSCardEyebrow from '@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow';
import DDSCardHeading from '@carbon/ibmdotcom-web-components/es/components-react/card/card-heading.js';
import DDSCardCTAFooter from '@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer.js';
import DDSImage from '@carbon/ibmdotcom-web-components/es/components-react/image/image';

export default function CardGroup(content) {  
	const { cards } = content?.fields || {};
  return (
    <DDSCardGroup>
			{cards.map(card => {
				const {eyebrow, heading, href, copy, altText, image} = card?.fields;
				const { url } = image?.fields?.file || {};
				return (
					<DDSCardGroupItem cta-type="local" href={href}>
						{image && <DDSImage slot="image" alt={altText} defaultSrc={"https:" + url} />}
						{eyebrow && <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>}
						<DDSCardHeading>{heading}</DDSCardHeading>
						<p>{copy}</p>
						<DDSCardCTAFooter slot="footer"></DDSCardCTAFooter>
				</DDSCardGroupItem>
				)
			})}
    </DDSCardGroup>
  );
}