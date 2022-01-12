import styled, { createGlobalStyle } from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html.sr .load-hidden {
        visibility: hidden;
    }

    [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
	    scroll-behavior: smooth;
    }

    :root {
        --colorBg: #252525;
        --colorOutline: #ffffff;
        --colorOutlineFade: #4e5559;

        --widthMouse: 45px;
        --heightMouse: 75px;
        --borderMouse: 6px;

        --posMouse: 8px;
        --posText: 2px;

        --sizeTrackball: 5px;
        --posTrackball: 20px;
        --shrinkTrackball: 0.4;

        --animDuration: 5s;

        --bgGradient: var(--colorOutlineFade) linear-gradient(transparent 0%,transparent 50%,var(--colorOutline) 50%,var(--colorOutline) 100%);
    }
    
    html, body, #root {
        &::-webkit-scrollbar {
            display: none;
        }
        
        min-height: 100vh;
        width : 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;

        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    section {
        position: relative;
    }

    h1, h2, h3, h4, h5 {
        color: #ffffff;
    }

     span, button, p  {
        font-family: 'Roboto', sans-serif;
        color: #949494;
    }

    b, strong {
        color: #ffffff;
    }

    textarea {
        resize: none;
    }

    input, textarea {
        &:focus-within {
            border: 2px solid #838383;
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        color: #fff;
        transition: all 5000s ease-in-out 0s;
    }

    textarea, select, input, textarea, select:focus, button{
        border: 0;
        outline: none;
    }

    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }

    *, button, input {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    ul {
        color: #000;
    }

    @media (min-width: 1600px) {
        html {
            font-size: 90%;
        }
    }

    @media (max-width: 1200px) {
        html {
            font-size: 82%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 75%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 75%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 70%;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 65%;
        }
    }
`;

export const ScrollStyled = styled(SimpleBar)`
    max-height: 99.9999999vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
`;