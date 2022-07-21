import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes } from "react-router-dom";

const AnimateRoutes = ({children}) => {
    return(
        <AnimatePresence>
            <Routes>
                {children}
            </Routes>
        </AnimatePresence>

    );
}

export default AnimateRoutes;