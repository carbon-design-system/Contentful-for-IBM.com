import dynamic from "next/dynamic";
const BackgroundMedia = dynamic(import("./BackgroundMedia"), { ssr: false });
const CardGroup = dynamic(import("./CardGroup"), { ssr: false });
const ContentBlock = dynamic(import("./ContentBlock"), { ssr: false });
const ContentGroup = dynamic(import("./ContentGroup"), { ssr: false });
const Card = dynamic(import("./Card"), { ssr: false });
const Leadspace = dynamic(import("./Leadspace"), { ssr: false });
const TableOfContents = dynamic(import("./TableOfContents"), { ssr: false });
const CardSectionCarousel = dynamic(import("./CardSectionCarousel"), {
  ssr: false,
});
const PieChart = dynamic(import("./PieChart"), {
  ssr: false,
});

const map = {
  "dds-content-block": ContentBlock,
  "dds-card": Card,
  "dds-content-group": ContentGroup,
  "dds-card-group": CardGroup,
  "dds-card-section-carousel": CardSectionCarousel,
  "dds-background-media": BackgroundMedia,
  "dds-leadspace": Leadspace,
  "dds-table-of-contents": TableOfContents,
  pieChart: PieChart,
};

export default function ComponentRenderer(content) {
  const { components } = content || {};

  let componentList = components || content.content;

  if (!Array.isArray(componentList)) componentList = [componentList];

  return (
    <>
      {componentList?.map((component) => {
        const { id } = component.sys.contentType.sys;
        let ComponentName = map[id];

        if (!ComponentName) {
          return <></>;
        }

        return <ComponentName key={component.sys.id} {...component} />;
      })}
    </>
  );
}
