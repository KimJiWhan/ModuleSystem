import { createGlobalStyle } from "styled-components";
import GodoB from "./GodoB.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "GodoB";
        src: url(${GodoB});
        font-weight: 300;
        font-style: normal;
    }
    
    # add your fonts
`;