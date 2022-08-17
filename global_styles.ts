import { createGlobalStyle as GlobalStyle } from "styled-components";

export default GlobalStyle`
    html {
        --color-text-black: black;
        --color-nav-tabs: #838383;
        --height-navbar: 4rem;
        --height-footer: 2rem;
        --logo-style: 'Hurricane', cursive;
    }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
 `;
