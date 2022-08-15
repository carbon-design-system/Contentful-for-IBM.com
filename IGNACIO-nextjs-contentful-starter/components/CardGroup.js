import dynamic from 'next/dynamic';
import DDSCardGroup from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group.js';
import DDSCardGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item.js';
import DDSCardHeading from '@carbon/ibmdotcom-web-components/es/components-react/card/card-heading.js';
import DDSCardCTAFooter from '@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer.js';

export default function ContentBlock(content) {  
	const { cards } = content?.fields || {};

	console.log(cards)

  return (
    <DDSCardGroup>
			{cards.map(card => {

				console.log(card)
				const {heading, href, copy} = card?.fields;
				return (
					<DDSCardGroupItem cta-type="local" href={href}>
						<DDSCardHeading>{heading}</DDSCardHeading>
						<p>{copy}</p>
						<DDSCardCTAFooter slot="footer"></DDSCardCTAFooter>
				</DDSCardGroupItem>
				)
			})}
    </DDSCardGroup>
  );
}