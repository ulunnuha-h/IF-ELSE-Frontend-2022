import React, { useState } from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
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
            <div className='w-100 h-100 position-fixed d-flex justify-content-center align-items-center' style={loadStyle}>
                <span className="h3">Loading</span>
            </div>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </ParallaxProvider>
    );
}

export default Home;