import React, { Suspense } from "react";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import { ParallaxProvider } from "react-scroll-parallax";
const Page1 = React.lazy(()=>import('./Pages/Page1'));

const Home = () => {
    const Loading = 
    <div className='d-block position-fixed d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100vw',zIndex:'2',backgroundColor:'var(--color-3)'}}>
        <div className="spinner-border" >
            <span className="sr-only">Loading...</span>
        </div>
    </div>;



    return(
        <ParallaxProvider>
            <Suspense fallback={Loading}>
                <Page1/>
            </Suspense>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </ParallaxProvider>
    );
}

export default Home;