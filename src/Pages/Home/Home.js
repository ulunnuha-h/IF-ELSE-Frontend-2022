import React, { useState } from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
    const [loading,setLoading] = useState(true);

    return(
        <ParallaxProvider>
        <main>
            <div className={loading ? 'd-block position-fixed d-flex justify-content-center align-items-center' : 'd-none'} style={{height:'100vh',width:'100vw',zIndex:'2',backgroundColor:'var(--color-3)'}}>
                <div className="spinner-border" >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <Page1 setLoading={setLoading}/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </main>
        </ParallaxProvider>
    );
}

export default Home;