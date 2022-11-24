import React from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { ParallaxProvider } from "react-scroll-parallax";

const Gallery = () => {
    return(
        <ParallaxProvider>
            <Page1 />
            <Page2 />
        </ParallaxProvider>
    );
}

export default Gallery;