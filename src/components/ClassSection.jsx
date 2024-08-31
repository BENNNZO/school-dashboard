'use client'

import { useState } from "react"
import TodoList from "./TodoList"

export default function ClassSection(props) {
    const [checklistToggle, setChecklistToggle] = useState(false)
    const { title, checklist } = props
    
    return (
        <section className="bg-neutral-950 w-full flex flex-col justify-between">
            <div>
                <div className="relative">
                    {
                        checklist && <div className={`fixed top-0 left-0 w-full h-full bg-black/10 duration-200 z-20 ${checklistToggle ? 'pointer-events-auto blur-in' : 'pointer-events-none blur-out'}`} onClick={() => setChecklistToggle(prev => !prev)}></div>
                    }
                    <h2 className={`text-center text-white font-semibold text-2xl py-3 ${checklist && checklistToggle && "relative z-20"} z-0`} onClick={() => setChecklistToggle(prev => !prev)}>{title}</h2>
                    {
                        checklist &&
                        <ul className={`pointer-events-none backdrop-blur-lg text-white absolute top-full left-1/2 -translate-x-1/2 z-20 rounded-sm backdrop-brightness-50 border border-neutral-800/50 ${checklistToggle ? 'fade-in pop-in' : 'fade-out pop-out'}`}>
                            {checklist.map((item, index) => (
                                <li key={index} className="px-4 py-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
                <div className="flex flex-col p-2 gap-2">
                    {props.children}
                </div>
            </div>
            <TodoList localKey={title} />
        </section>
    )
}