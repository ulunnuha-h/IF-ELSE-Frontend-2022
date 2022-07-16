import { useState } from 'react'
import React from 'react'
import './Display.css'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import Tanya from './Tanya.js'


function Display() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="display-wrapper">
            <div className="accordion">
                {
                Tanya && Tanya.map((item, i) => (
                    <div key={item.id} className="item">
                        <div className="question" onClick={() => toggle(i)}>
                            <p>{item.pertanyaan}</p>
                            {selected == i ? <AiOutlineUp class="up"></AiOutlineUp> : <AiOutlineDown class="down"></AiOutlineDown>}
                        </div>
                        <div className={selected == i ? 'answer show' : 'answer'}><p>{item.jawaban}</p></div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Display;