import { useState } from 'react'
import React from 'react'
import './Display.css'
import { AiOutlineUp } from "react-icons/ai";
import { motion } from 'framer-motion'
import Tanya from './Tanya.js'


function Display() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
        selected(i)
    }

    return (
        <div className="display-wrapper">
            <div className="accordion-display">
                {
                Tanya && Tanya.map((item, i) => (
                    <motion.div 
                        initial={{opacity:0,x:-30}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:`${i*0.05}`}}
                        key={i} 
                        className="item my-3">
                        <div className="question-display p-3" onClick={() => toggle(i)}>
                            <p className='text-white m-0 p-0'>{item.pertanyaan}</p>
                            <div>
                                {selected === i ? <AiOutlineUp className="nope"></AiOutlineUp> : <AiOutlineUp className="rotate"></AiOutlineUp>}
                            </div>
                        </div>
                        <div className={selected === i ? 'answer show' : 'answer'}><p>{item.jawaban}</p></div>
                    </motion.div>
                ))
                }
            </div>
        </div>
    )
}

export default Display;