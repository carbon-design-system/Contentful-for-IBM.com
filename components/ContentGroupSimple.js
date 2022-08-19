import dynamic from 'next/dynamic';
import DDSContentGroupSimple from '@carbon/ibmdotcom-web-components/es/components-react/content-group-simple/content-group-simple';
import DDSContentGroupHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading';
import DDSContentGroupCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-copy';
import DDSImage from '@carbon/ibmdotcom-web-components/es/components-react/image/image';
import DDSImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item';
import DDSVideoPlayerContainer from '@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container';

const ComponentRenderer = dynamic(import('./ComponentRenderer'), { ssr: false })
const CardLinkCTA = dynamic(import('./CardLinkCTA'), { ssr: false });

export default function ContentGroupSimple(content) {  
	const { heading, copy, children, cta, caption, defaultSrc, imageItems, videoId } = content?.fields || {};
  return (
		<DDSContentGroupSimple>
			<DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
			<DDSContentGroupCopy>{copy}</DDSContentGroupCopy>
			{!videoId && <DDSImage slot='media' defaultSrc={'https:' + defaultSrc} heading={caption}>
				{imageItems?.map(image => {
					const {minWidth} = image.fields;
					const {url} = image.fields.image.fields.file;

					return <DDSImageItem media={`(min-width: ${minWidth})`} srcset={'https:' + url}></DDSImageItem>
				})}
			</DDSImage>}

			{videoId && 
        <DDSVideoPlayerContainer video-id={videoId} background-mode={true}></DDSVideoPlayerContainer>
			}
			{children?.map(child => {
					return <ComponentRenderer content={child}/>
				})}

			{cta && <CardLinkCTA {...cta}/>}
    </DDSContentGroupSimple>
  );
}