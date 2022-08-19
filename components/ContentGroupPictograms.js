import DDSContentGroupPictograms from '@carbon/ibmdotcom-web-components/es/components-react/content-group-pictograms/content-group-pictograms';
import DDSContentGroupHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading';
import DDSContentGroupCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-copy';

import DDSPictogramItem from '@carbon/ibmdotcom-web-components/es/components-react/pictogram-item/pictogram-item';
import DDSContentItemHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading.js';
import DDSContentItemCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy.js';
import DDSLinkWithIcon from '@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon';
import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20.js';

const pictoMap = {
	'Desktop': `M15,29H9V10h25v19h-7
							M34,26h-7 M15,26H9 M30,29v8h9V21h-5 M30,34h9 M20.998,27.621c0-0.573-0.447-1.037-0.998-1.037s-0.998,0.464-0.998,1.037v2.378
							l-0.005-6.962c0-0.573-0.447-1.037-0.998-1.037S17,22.464,17,23.037v5.882v4.924C17,36.139,18.792,38,21.002,38
							S25,36.121,25,33.842v-5.04c0-0.573-0.447-1.037-0.998-1.037s-0.998,0.464-0.998,1.037v1.196l-0.005-1.935
							c0-0.573-0.447-1.037-0.998-1.037s-1.002,0.464-1.002,1.037l0.004,1.935L20.998,27.621z`,
	'Icons': "M27,29H11c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v16C29,28.1,28.1,29,27,29z M19,29v8c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2V21c0-1.1-0.9-2-2-2h-8 M23,11l0-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1l0,1c0,0.552,0.448,1,1,1h1 C22.552,12,23,11.552,23,11z M18,17l0-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1v1c0,0.552,0.448,1,1,1h1 C17.552,18,18,17.552,18,17z M29,17l0-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1l0,1c0,0.552,0.448,1,1,1h1 C28.552,18,29,17.552,29,17z M12,22v-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1v1c0,0.552,0.448,1,1,1h1 C11.552,23,12,22.552,12,22z M23,22l0-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1l0,1c0,0.552,0.448,1,1,1h1 C22.552,23,23,22.552,23,22z M18,28l0-1c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1v1c0,0.552,0.448,1,1,1h1 C17.552,29,18,28.552,18,28z M29,27L29,27c0-0.552-0.448-1-1-1h-1c-0.552,0-1,0.448-1,1v1c0,0.552,0.448,1,1,1h0 C28.105,29,29,28.105,29,27z M9,11L9,11c0,0.552,0.448,1,1,1h1c0.552,0,1-0.448,1-1v-1c0-0.552-0.448-1-1-1h0",
	'Cursor': "M21,15 c0-1.186,0.821-2,2-2h-0.003C24.176,13,25,13.814,25,15v8c0,0,4.663,0,6.913,0C34.162,23,36,24.541,36,26.776c0,0,0,2.758,0,4.01 C36,35.478,34.706,39,27.769,39c-4.829,0-7.104-2.056-10.134-5.48c-0.845-0.955-3.439-3.765-3.439-3.765 C13.365,28.819,12,27.415,12,26.985c0-1.299,3.219-2.011,4.792-0.803C18.008,27.116,21,30.5,21,30.5V15z M26.994,19.46 c1.23-1.09,2-2.69,2-4.46c0-3.31-2.69-6-6-6s-6,2.69-6,6c0,1.77,0.77,3.37,2,4.46"
}

export default function ContentGroupPictograms(content) {  
	const { heading, copy, pictogramItems } = content?.fields || {};

  return (
		<DDSContentGroupPictograms>
			<DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
			{copy && <DDSContentGroupCopy>{copy}</DDSContentGroupCopy>}
			{pictogramItems?.map(child => {
				const {heading, copy, pictogram, ctaText, ctaHref} = child.fields;
				return (
				<DDSPictogramItem>
					<svg version="1.1" slot="pictogram" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64" height="64" viewBox="8 8 32 32" xmlSpace="preserve"><g id="touch_screen" style={{stroke: 'black'}}><g id="touch_screen_1_">
						<path fill="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".72" d={pictoMap[pictogram]}>
						</path></g></g><g id="Layer_1"></g>
					</svg>
					<DDSContentItemHeading>{heading}</DDSContentItemHeading>
					<DDSContentItemCopy>{copy}</DDSContentItemCopy>
					<DDSLinkWithIcon href={ctaHref} slot="footer">
						{ctaText} <ArrowRight20 slot="icon"></ArrowRight20>
					</DDSLinkWithIcon>
				</DDSPictogramItem>
				)})}
    </DDSContentGroupPictograms>
  );
}