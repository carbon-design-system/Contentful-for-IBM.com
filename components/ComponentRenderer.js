
import dynamic from 'next/dynamic';
const BackgroundMedia = dynamic(import('./BackgroundMedia'), { ssr: false })
const CardGroup = dynamic(import('./CardGroup'), { ssr: false })
const ContentBlock = dynamic(import('./ContentBlock'), { ssr: false });
const ContentBlockSegmentedItem = dynamic(import('./ContentBlockSegmentedItem'), { ssr: false });
const ContentGroup = dynamic(import('./ContentGroup'), { ssr: false });
const ContentGroupSimple = dynamic(import('./ContentGroupSimple'), { ssr: false });
const ContentGroupPictograms = dynamic(import('./ContentGroupPictograms'), { ssr: false });
const ContentItem = dynamic(import('./ContentItem'), { ssr: false });
const Card = dynamic(import('./Card'), { ssr: false })
const Leadspace = dynamic(import('./Leadspace'), { ssr: false })
const TableOfContents = dynamic(import('./TableOfContents'), { ssr: false })
const CardSectionCarousel = dynamic(import('./CardSectionCarousel'), {ssr: false});
const CardSection = dynamic(import('./CardSection'), {ssr: false});
const PieChart = dynamic(import("./PieChart"), {
  ssr: false,
});

import exploreMore from "../data/exploreMore.json";



const map = {
	"dds-content-block": ContentBlock,
	'dds-card': Card,
	'dds-content-item': ContentItem,
	'dds-content-block-segmented-item': ContentBlockSegmentedItem,
	'dds-content-group': ContentGroup,
	'dds-content-group-simple': ContentGroupSimple,
	'dds-content-group-pictograms': ContentGroupPictograms,
	'dds-card-group': CardGroup,
	'dds-card-section-with-images': CardSection,
	'dds-card-section-carousel': CardSectionCarousel,
	'dds-background-media': BackgroundMedia,
	'dds-leadspace': Leadspace,
	'dds-table-of-contents': TableOfContents,
	pieChart: PieChart,
}

export default function ComponentRenderer(content) {
  const { components } = content || {};

  let componentList = components || content.content;

  if (!Array.isArray(componentList)) componentList = [componentList];

  return (
    <>
      {componentList?.map((component) => {
        const { id } = component.sys.contentType.sys;
        let ComponentName = map[id];

        if(id == 'mastheadCustomization') {
          const masthead = document.querySelector('dds-masthead-composite')
          const { mastheadLinks } = component?.fields || {};

          const navLinks = []

          mastheadLinks.map(link => {
            navLinks.push(link?.fields)
          })
          navLinks.push(exploreMore)
          masthead.navLinks = navLinks;
        }

        if (!ComponentName) {
          return <></>;
        }

        return <ComponentName key={component.sys.id} {...component} />;
      })}
    </>
  );
}
