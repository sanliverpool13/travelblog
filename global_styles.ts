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

        --navbar-content-width: 90%;
        --navbar-max-width: 1300px;


        --bg-color-error-alert: #fdeded;
        --bg-color-success-alert: #edf7ed;
        --color-error-alert: #5f2120;
        --color-success-alert: #1e4620;
        --clr-trqse: #9ED8DB;
        --bg-clr-snackbar-success: #2e7d32;
        --bg-clr-snackbar-error: #d32f2f;
        --bg-clr-navbar: #274c77;
        --bg-clr-footer: #1D3354;

        --post-content-height: 280px;
        background-color: #f7f9fb;

        

        --about-font-size: 1.2rem;
        --about-line-height: 1.7rem;


        --img-border-radius: 15px;

        
    }
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Karla', sans-serif;
    }

    .custom-map {
      background: linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b); /* Gradient background */
      border: 2px solid #fff; /* Optional: Border around the map */
      border-radius: 8px; /* Optional: Rounded corners */
    }
    
    .leaflet-container {
      background-color: transparent !important; /* Ensures the map tiles have a transparent background */
    }
    
 `;
