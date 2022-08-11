import DDSTableOfContents from '@carbon/ibmdotcom-web-components/es/components-react/table-of-contents/table-of-contents.js';
import ComponentRenderer from './ComponentRenderer';

export default function Card(content) {
	const { contentBody } = content?.fields || {};

	return (
		<DDSTableOfContents>
			{contentBody.map(section => {
				const { sectionHeading, sectionContent } = section?.fields;

				console.log('sectionContent', sectionContent)

				return (
					<>
    				<a name={sectionHeading} data-title={sectionHeading}></a>
						<ComponentRenderer content={sectionContent}/>
					</>
				)
			})}
		</DDSTableOfContents>
  )
}