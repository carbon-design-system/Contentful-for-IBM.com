import { useEffect } from "react";
import { useRouter } from "next/router";

import exploreMore from "../data/exploreMore.json";

import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const intervalID = setInterval(() => {
        const masthead = document.querySelector("dds-masthead-composite");
        const mastheadLogo = document.querySelector("dds-masthead-logo");

        if (masthead && mastheadLogo) {
          /*
           * Update onclick
           * Function for site logo in masthead
           */
          mastheadLogo.setAttribute("href", null);
          mastheadLogo.addEventListener("click", (e) => {
            e.preventDefault();

            router.push("/");
          });

          /*
           * Update masthead
           * Navigation links
           */
          const navLinks = [
            {
              title: "Blog (CMS)",
              titleEnglish: "Blog",
              hasMenu: false,
              hasMegapanel: false,
            },
            {
              title: "Example Page (CMS)",
              titleEnglish: "Examples",
              hasMenu: false,
              hasMegapanel: false,
            },
          ].concat([exploreMore]);
          masthead.navLinks = navLinks;

          /*
           * Update navigation link onClicks
           * in the masthead
           */
          Array.from(
            document.querySelectorAll("dds-top-nav dds-top-nav-item")
          ).forEach((navItem) => {
            navItem.addEventListener("click", (e) => {
              e.preventDefault();

              if (navItem.getAttribute("title") === "Blog (CMS)") {
                router.push("/blog/blog-test");
              } else if (
                navItem.getAttribute("title") === "Example Page (CMS)"
              ) {
                router.push("/examples/example-page");
              }
            });
          });

          /*
           * Override search
           * Typeahead functionality
           */
          document.addEventListener(
            "dds-search-with-typeahead-input",
            async (e) => {
              document.dispatchEvent(
                new CustomEvent("dds-custom-typeahead-api-results", {
                  detail: [
                    [
                      ".test",
                      "4.62 test — Evaluate Expression",
                      "6.Test the Other Batch System",
                      "8. Test",
                      "TEST",
                      "TEST (Test Date/Time/Timestamp)",
                    ],
                  ],
                })
              );
            }
          );

          setInterval(() => {
            const masthead = document.querySelector("dds-masthead-composite");

            if (masthead) {
              masthead.setAttribute("custom-typeahead-api", true);
            }
          }, 1000);

          /*
           * Clear this
           * Interval
           */
          clearInterval(intervalID);
        }
      }, 1000);
    }
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
