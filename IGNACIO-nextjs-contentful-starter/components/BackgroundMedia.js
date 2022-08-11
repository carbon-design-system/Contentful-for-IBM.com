import DDSBackgroundMedia from '@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media';
import DDSImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item';
import DDSVideoPlayerContainer from '@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container';

export default function BackgroundMedia(content) {
	const {gradientDirection, mobilePosition, altText, defaultSrc, imageItems, opacity, videoId, slot} = content?.fields || {};
	const {url} = defaultSrc?.fields?.file || {};
  return (
    <DDSBackgroundMedia
      gradient-direction={gradientDirection}
      mobile-position={mobilePosition}
      alt={altText}
      default-src={'https:' + url}
			opacity={opacity}
			slot={slot}
    >
			{!videoId && imageItems.map(image => {
				const {minWidth} = image.fields;
				const {url} = image.fields.image.fields.file;

				return <DDSImageItem media={`(min-width: ${minWidth})`} srcset={'https:' + url}></DDSImageItem>
			})}

			{videoId && 
        <DDSVideoPlayerContainer video-id={videoId} background-mode={true}></DDSVideoPlayerContainer>
			}
    </DDSBackgroundMedia>
  );
}