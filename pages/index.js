import dynamic from "next/dynamic";
import { createClient } from "contentful";

import DDSLeadspace from "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace";
import DDSButtonGroup from "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group";
import DDSButtonGroupItem from "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item";

import DDSContentBlockSimple from "@carbon/ibmdotcom-web-components/es/components-react/content-block-simple/content-block-simple";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSContentBlockCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy";
import DDSTextCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta";

import DDSLeadspaceImage from "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-image";
import DDSLeadspaceHeading from "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-heading";

import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";

const leadspaceImg =
  "https://carbon-design-system.github.io/carbon-for-ibm-dotcom/canary/web-components/02fd8c264bac2e2e8b0841a936484b5c.jpg";
const copy = `Many organizations are engaging in open source technology to optimize their Linux environment.
  The ability to integrate open systems with traditional or hybrid cloud IT infrastructure has a profound effect
  on driving innovation and a growing number of IT professionals are actively participating in open source
  communities as a way to stay at the forefront of development.`;

export default function Recipes({ page }) {
  return (
    <div>
      <div className="dds-theme-zone-g100">
        <DDSLeadspace
          size="medium"
          gradient-style-scheme=""
          alt="Image alt text"
          default-src={leadspaceImg}
          data-autoid="dds--leadspace"
        >
          <DDSLeadspaceHeading role="heading" aria-level="1" slot="heading">
            Linux servers and operating systems
          </DDSLeadspaceHeading>
          Optimize your IT infrastructure — on-premises and in the cloud — with
          the flexibility and control that comes with open source development
          <DDSButtonGroup
            slot="action"
            role="list"
            style={{ "--dds--button-group--item-count": 2 }}
          >
            <DDSButtonGroupItem
              href="https://example.com"
              role="listitem"
              kind="tertiary"
            >
              Try it on premises
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                slot="icon"
              >
                <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z" />
              </svg>
            </DDSButtonGroupItem>

            <DDSButtonGroupItem
              href="https://example.com"
              role="listitem"
              kind="primary"
            >
              Try it on cloud
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                slot="icon"
              >
                <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z" />
              </svg>
            </DDSButtonGroupItem>
          </DDSButtonGroup>
          <DDSLeadspaceImage
            slot="image"
            alt="Image alt text"
            default-src={leadspaceImg}
            data-autoid="dds--image"
          >
            <DDSImageItem
              media="(min-width: 672px)"
              srcset={leadspaceImg}
            ></DDSImageItem>

            <DDSImageItem
              media="(min-width: 0)"
              srcset={leadspaceImg}
            ></DDSImageItem>
          </DDSLeadspaceImage>
        </DDSLeadspace>
      </div>

      <main>
        <div className="bx--grid bx--grid--narrow">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 bx--offset-lg-4">
              <DDSContentBlockSimple complementary-style-scheme="with-border">
                <DDSContentBlockHeading>
                  Flexibility and control are the key to open source Linux
                  development
                </DDSContentBlockHeading>
                <DDSContentBlockCopy allowHTML="false" size="sm">
                  {copy}
                </DDSContentBlockCopy>
                <DDSTextCTA
                  slot="footer"
                  cta-type="local"
                  href="https://example.com"
                >
                  Explore supply chain consulting services
                </DDSTextCTA>
              </DDSContentBlockSimple>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 bx--offset-lg-4">
              <DDSContentBlockSimple>
                <DDSContentBlockHeading>
                  What sets IBM Linux servers apart?
                </DDSContentBlockHeading>
                <dds-link-list type="default" slot="complementary">
                  <dds-link-list-heading>Resources</dds-link-list-heading>
                  <dds-link-list-item-card-cta
                    href="https://example.com"
                    cta-type="local"
                  >
                    <p>Read the solution brief</p>
                    <dds-card-cta-footer></dds-card-cta-footer>
                  </dds-link-list-item-card-cta>
                  <dds-link-list-item-card-cta
                    href="https://example.com"
                    cta-type="external"
                  >
                    <p>What is LinuxOne?</p>
                    <dds-card-cta-footer></dds-card-cta-footer>
                  </dds-link-list-item-card-cta>
                </dds-link-list>
                <DDSContentBlockCopy>
                  <dds-content-item>
                    <dds-content-item-heading>
                      Industry-leading performance
                    </dds-content-item-heading>
                    <dds-content-item-copy>
                      Potential for 30% improvement in transactional response
                      time with fast data retrieval and queries, plus disk space
                      compression.
                    </dds-content-item-copy>
                  </dds-content-item>
                  <dds-content-item>
                    <dds-content-item-heading>
                      Advanced protection
                    </dds-content-item-heading>
                    <dds-content-item-copy>
                      Sophisticated authorization, encryption at rest and in
                      transit, and comprehensive security controls for managing
                      GDPR compliance.
                    </dds-content-item-copy>
                  </dds-content-item>
                  <dds-content-item>
                    <dds-content-item-heading>
                      Continuous availability
                    </dds-content-item-heading>
                    <dds-content-item-copy>
                      Auto resynchronization and recovery plus clustering with
                      IBM pureScale® to keep your business running 24x7.
                    </dds-content-item-copy>
                  </dds-content-item>
                  <dds-content-item>
                    <dds-content-item-heading>
                      Automated administration and tooling
                    </dds-content-item-heading>
                    <dds-content-item-copy>
                      Automatic setup, optimization, diagnostics and management
                      of the database environment to save administration time
                      and cut maintenance costs.
                    </dds-content-item-copy>
                  </dds-content-item>
                  <dds-content-item>
                    <dds-content-item-heading>
                      Multiple data types and languages
                    </dds-content-item-heading>
                    <dds-content-item-copy>
                      Integration with multiple platforms to build robust apps.
                      Supports NoSQL, pureXML, Graph and JSON, Java, .Net, Ruby,
                      Python, Perl and more.
                    </dds-content-item-copy>
                  </dds-content-item>
                  <dds-content-item>
                    <dds-content-item-heading>Scaling</dds-content-item-heading>
                    <dds-content-item-copy>
                      Elastic scaling of up to 128 machines in multicloud and
                      hybrid environments to reduce storage costs, plus data
                      federation to eliminate data silos.
                    </dds-content-item-copy>
                  </dds-content-item>
                </DDSContentBlockCopy>
              </DDSContentBlockSimple>
            </div>
          </div>
        </div>

        {/* <div className="bx--grid bx--no-gutter">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8 bx--offset-lg-4">
              <dds-content-group-simple>
                <dds-content-group-heading>
                  See how it works
                </dds-content-group-heading>
                <dds-feature-card href="https://example.com">
                  <dds-image
                    slot="image"
                    alt="Feature card image"
                    default-src="${imgLg1x1}"
                  ></dds-image>
                  <dds-card-heading>
                    Discover how innovative companies are using open source
                    technology to ignite collaboration
                  </dds-card-heading>
                  <dds-feature-card-footer>
                    ${ArrowRight20({ slot: "icon" })}
                  </dds-feature-card-footer>
                </dds-feature-card>
              </dds-content-group-simple>
            </div>
          </div>
        </div>
        <div className="bx--grid bx--no-gutter">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16">
              <dds-card-section-simple>
                <dds-content-section-heading>
                  Linux operating systems
                </dds-content-section-heading>
                <dds-card-group>
                  <dds-card-group-item href="https://example.com">
                    <dds-card-heading>Linux OS on mainframes</dds-card-heading>
                    Linux on IBM mainframes lets you transform your application
                    and data portfolio with data privacy, security, and cyber
                    resiliency.
                    <dds-card-cta-footer slot="footer">
                      ${ArrowRight20({ slot: "icon" })}
                    </dds-card-cta-footer>
                  </dds-card-group-item>
                  <dds-card-group-item href="https://example.com">
                    <dds-card-heading>Linux OS on LinuxONE</dds-card-heading>
                    <p>
                      Transform your application and data portfolio with
                      innovative data privacy, security and cyber resiliency
                      capabilities, plus minimal downtime.
                    </p>
                    <dds-card-cta-footer slot="footer">
                      ${ArrowRight20({ slot: "icon" })}
                    </dds-card-cta-footer>
                  </dds-card-group-item>
                  <dds-card-group-item href="https://example.com">
                    <dds-card-heading>
                      Linux OS on Power Systems
                    </dds-card-heading>
                    <p>
                      Process massive amounts of data quickly, efficiently and
                      cost-effectively on an open, scalable infrastructure with
                      built-in acceleration.
                    </p>
                    <dds-card-cta-footer slot="footer">
                      ${ArrowRight20({ slot: "icon" })}
                    </dds-card-cta-footer>
                  </dds-card-group-item>
                </dds-card-group>
              </dds-card-section-simple>
            </div>
          </div>
        </div>
        <div className="bx--grid bx--no-gutter">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16">
              <dds-cta-section>
                <dds-cta-block no-border>
                  <DDSContentBlockHeading>
                    Take the next step
                  </DDSContentBlockHeading>
                  <DDSContentBlockCopy>
                    Get started with Linux servers and operating systems at the
                    foundation of your IT infrastructure.
                  </DDSContentBlockCopy>
                  <dds-button-group
                    slot="action"
                    role="list"
                    style="--dds--button-group--item-count:2;"
                  >
                    <dds-button-group-item
                      aria-label=""
                      href="https://example.com"
                      role="listitem"
                      icon-layout=""
                      kind="tertiary"
                      size=""
                    >
                      Try it on premises
                      <svg
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        slot="icon"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </dds-button-group-item>
                    <dds-button-group-item
                      aria-label=""
                      href="https://example.com"
                      role="listitem"
                      icon-layout=""
                      kind="primary"
                      size=""
                    >
                      Try it on cloud
                      <svg
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        slot="icon"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </dds-button-group-item>
                  </dds-button-group>
                  <dds-link-list slot="link-list" type="end">
                    <dds-link-list-heading>
                      More ways to explore Linux servers
                    </dds-link-list-heading>
                    <dds-link-list-item href="https://example.com">
                      Products ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Blogs ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Latest research ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Key concepts ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Client stories ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Training ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Analyst insights ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Events ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                    <dds-link-list-item href="https://example.com">
                      Partners ${ArrowRight20({ slot: "icon" })}
                    </dds-link-list-item>
                  </dds-link-list>
                </dds-cta-block>
              </dds-cta-section>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
