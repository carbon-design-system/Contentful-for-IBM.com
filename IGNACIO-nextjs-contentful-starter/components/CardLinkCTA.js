import DDSCardLinkCTA from '@carbon/ibmdotcom-web-components/es/components-react/cta/card-link-cta';
import DDSCardLinkHeading from '@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading';
import DDSCardCTAFooter from '@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer';


export default function CardLinkCTA({ cardLinkCTA }) {
	const { ctaType, href, heading } = cardLinkCTA.fields;

  return (
		<DDSCardLinkCTA slot="footer" cta-type={ctaType} href={href}>
			<DDSCardLinkHeading>{heading}</DDSCardLinkHeading>
			<DDSCardCTAFooter></DDSCardCTAFooter>
		</DDSCardLinkCTA>
  );
}