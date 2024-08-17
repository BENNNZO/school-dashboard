'use client'

import { useState, useEffect } from "react"

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener('mousemove', updatePosition)

        return () => {
            document.removeEventListener('mousemove', updatePosition)
        }
    }, [])

    return (
        <div className={`bg-red-400 w-4 h-4 rounded-full absolute top-0 left-0`} style={{ transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))` }} />
    )
}