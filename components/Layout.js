import dynamic from "next/dynamic";
const DDSDotcomShellContainer = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/dotcom-shell/dotcom-shell-container.js"
  ),
  { ssr: false }
);

export default function Layout({ children }) {
  const { rtl } = children.props?.page?.fields || false;

  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/plex.css"
        />

        <link
          rel="stylesheet"
          href="https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/grid.css"
        />

        <link
          rel="stylesheet"
          href="https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/themes.css"
        />

        <meta charset="UTF-8" />

        <link rel="icon" href="//www.ibm.com/favicon.ico" />

        <meta name="dcterms.date" content="YYYY-MM-DD" />
        <meta name="dcterms.rights" content="© Copyright IBM Corp. 2016" />
        <meta name="geo.country" content="US" />
        <meta name="robots" content="index,follow" />
        <script
          src="//1.www.s81c.com/common/stats/ibm-common.js"
          defer
        ></script>

        {rtl && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            document.documentElement.dir = 'rtl';
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            `,
            }}
          />
        )}
      </header>

      <DDSDotcomShellContainer>{children}</DDSDotcomShellContainer>
    </div>
  );
}
