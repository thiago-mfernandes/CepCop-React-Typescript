import { createGlobalStyle } from "styled-components";
import { cinzaClaro, brancoBg } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`
//reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//global
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

body {
    
    font-size: 16px;
    display: grid;
    grid-template-columns: 15% 85%;
    background-color: cinzaClaro;
    transition: background-color .5s ease-in-out;
    min-height: 100vh;

    @media (min-width:0px) and (max-width:768px) {
        display: block;
        grid-template-columns: none;
        background-color: brancoBg;
        transition: background-color .5s ease-in-out;  
    }     
}
`