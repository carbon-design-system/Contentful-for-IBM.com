import dynamic from 'next/dynamic';

import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20.js';

import DDSButtonCTA from '@carbon/ibmdotcom-web-components/es/components-react/cta/button-cta';
import DDSButtonGroup from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group';
import DDSButtonGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item';
import DDSLeadspace from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace';
import DDSLeadspaceHeading from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-heading';
import DDSLeadspaceImage from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-image';
import DDSImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item';

const BackgroundMedia = dynamic(import('./BackgroundMedia'), { ssr: false });


export default function Leadspace(content) {
	const { size, buttonGroup, leadspaceImage, heading, copy, backgroundVideo } = content.fields || {};
	const { defaultSrc, imageItems, altText } = leadspaceImage.fields;
	const { videoId } = backgroundVideo?.fields || {};

	if(backgroundVideo) {
		backgroundVideo.fields.slot = 'image';
	}

	return (
    <DDSLeadspace size={size}>
      <DDSLeadspaceHeading>{heading}</DDSLeadspaceHeading>
      {copy}
			<DDSButtonGroup slot="action">
      {buttonGroup && 
				buttonGroup.map(button => {
					const {href, copy} = button.fields;
					return (
					<DDSButtonGroupItem href={href}>
						<ArrowRight20 slot="icon" />
						{copy}
					</DDSButtonGroupItem>
					)
				})}
      </DDSButtonGroup>
			
			{leadspaceImage && !videoId && 
				<DDSLeadspaceImage slot="image" default-src={defaultSrc} className="bx--image" alt={altText}>
          {imageItems && imageItems.map(image => {
						const {minWidth} = image.fields;
						const {url} = image.fields.image.fields.file;
						
						return <DDSImageItem media={`(min-width: ${minWidth})`} srcset={'https:' + url}></DDSImageItem>
					})}
      	</DDSLeadspaceImage>
			}
			
			{backgroundVideo && <BackgroundMedia {...backgroundVideo} />}
    </DDSLeadspace>
  )
}