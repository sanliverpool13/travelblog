import { createGlobalStyle as GlobalStyle } from "styled-components";

const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktop})`,
};

export default GlobalStyle`
    html {
        --color-text-black: black;
        --color-nav-tabs: #838383;
        --height-navbar: 6rem;
        --height-footer: 10rem;
        --logo-style: 'Hurricane', cursive;

        --max-width-content: 970x;
        --landing-section-widths: 90%;
        --landing-section-mobile-width: 100%;

        --border-default: 1px solid black;

        --bg-color-error-alert: #fdeded;
        --bg-color-success-alert: #edf7ed;
        --color-error-alert: #5f2120;
        --color-success-alert: #1e4620;
        --color-error-icon: #ef5350;
        --clr-trqse: #9ED8DB;

        --bg-clr-snackbar-success: #2e7d32;
        --bg-clr-snackbar-error: #d32f2f;

        --bg-clr-navbar: #274c77;
        --bg-clr-footer: #1D3354;

        --post-content-height: 280px;
        background-color: #f7f9fb;

        --navbar-max-width: 1300px;

        --about-font-size: 1.2rem;
        --about-line-height: 1.7rem;

        --mobile-side-padding: 1rem;

        --img-border-radius: 15px;

        
    }
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Karla', sans-serif;
    }
    
 `;
