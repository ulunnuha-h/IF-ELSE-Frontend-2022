import React, { useState } from "react";
import Page1 from "./Pages/Page1";
import { ParallaxProvider } from "react-scroll-parallax";

const Gallery = () => {
    const [loading,setLoading] = useState(true);
    setInterval(()=>{
        setLoading(false);
    },300)

    const loadStyle = {
        top : (loading ? 0 : "-100vh"),
        zIndex : 10,
        transition : "0.3s",
        transitionTimingFunction : "ease-in",
        backgroundColor : "var(--color-3)"
    }

    return(
        <ParallaxProvider>
            <Page1/>
        </ParallaxProvider>
    );
}

export default Gallery;