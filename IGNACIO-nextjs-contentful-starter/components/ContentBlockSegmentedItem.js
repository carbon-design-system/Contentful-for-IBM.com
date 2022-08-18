import DDSContentBlockSegmentedItem from '@carbon/ibmdotcom-web-components/es/components-react/content-block-segmented/content-block-segmented-item';
import DDSContentGroupHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading';
import DDSContentItemCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy';

import DDSImage from '@carbon/ibmdotcom-web-components/es/components-react/image/image';
import DDSTextCTA from '@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta';

export default function ContentBlockSegmentedItem(content) {  
	const { heading, copy, ctaText, ctaHref, ctaType, image, imageCaption, ctaIconPlacement  } = content?.fields || {};
	const { url } = image?.fields?.file || {};
  return (
		<DDSContentBlockSegmentedItem>
			<DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
			<DDSContentItemCopy>{copy}</DDSContentItemCopy>
			{image && <DDSImage slot='media' defaultSrc={url} heading={imageCaption}></DDSImage>}
			{ctaText && <DDSTextCTA slot='footer' cta-type={ctaType} icon-placement={ctaIconPlacement} href={ctaHref}>
				{ctaText}
			</DDSTextCTA>}
		</DDSContentBlockSegmentedItem>
  );
}