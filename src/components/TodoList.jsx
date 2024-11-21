'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import TrashIcon from '/public/assets/trash.svg'
import PlusIcon from '/public/assets/plus.svg'

export default function TodoList(props) {
    const { localKey } = props

    const [list, setList] = useState([])
    const [colorMenu, setColorMenu] = useState(false)
    const [colorMenuPos, setColorMenuPos] = useState({ x: 0, y: 0})
    const [colors, setColors] = useState([
        { color: "#dc2626" },
        { color: "#ea580c" },
        { color: "#ca8a04" },
        { color: "#16a34a" },
        { color: "#0284c7" }
    ])
    const [target, setTarget] = useState(null)

    const menuRef = useRef(null);

    useEffect(() => {
        const storedArray = localStorage.getItem(localKey)
        
        if (storedArray) {
            setList(JSON.parse(storedArray))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(list))
    }, [list])

    function resetList() {
        setList([{ text: "Civil Discourse Forum Post", color: null }, { text: "Forum Response 2", color: null }, { text: "Forum Response 2", color: null }, { text: "-- Add Others", color: null  }])
    }

    function handleMouseDown(e) {
        e.preventDefault()

        // Test if the click is a right click
        if (e.button == 2) {
            console.log("Right Down")

            setTarget(e.target)
            setColorMenu(true)
            setColorMenuPos({ x: e.clientX, y: e.clientY })
        }
    }

    function handleMouseUp(e) {
        e.preventDefault()

        // Test if the click is a right click
        if (e.button == 2) {
            console.log("Right Up")

            setList(prevList => {
                let newList = [...prevList]

                newList[target.getAttribute("index")].color = e.target.getAttribute("color")
                return newList
            })

            setColorMenu(false)
        }
    }

    return (
        <section className="bg-neutral-900/50 rounded-sm mx-2 mb-2 text-white border border-neutral-800/50 shadow-md" onContextMenu={e => e.preventDefault()}>
            <div className="flex flex-row justify-between p-2">
                <h2 className="font-bold tracking-wide" onDoubleClick={() => console.log(resetList())}>Todo</h2>
                <Image
                    src={PlusIcon}
                    width={25}
                    height={25}
                    className="invert bg-black/10 w-[26px] aspect-square my-auto rounded-sm hover:bg-black/20 duration-100 cursor-pointer"
                    alt="add todo button"
                    onClick={() => {
                        let text = prompt("TODO")

                        setList(prev => [...prev, { text, color: null }])
                    }}
                />
            </div>
            <ul>
                {list.map((e, i) => (
                    <li
                        key={i}
                        index={i}
                        className="border-t border-neutral-800/50 py-1.5 flex flex-row justify-between group px-2"
                        onContextMenu={e => e.preventDefault()}
                        onMouseDown={e => handleMouseDown(e)}
                        onMouseUp={e => handleMouseUp(e)}
                    >
                        <p className="pointer-events-none">{e.text}</p>
                        <div className="flex flex-row gap-3 items-center pointer-events-none">
                            <Image
                                src={TrashIcon}
                                width={25}
                                height={25}
                                alt="delete todo button"
                                className="opacity-0 group-hover:opacity-100 duration-100 hover:bg-red-400/20 w-6 p-1 rounded-sm cursor-pointer pointer-events-auto"
                                onClick={() => setList(prev => {
                                    let newArr = [...prev]
                                    newArr.splice(i, 1)
                                    return newArr
                                })}
                            />
                            <div
                                className={`w-4 h-4 rounded-full opacity-75 group-hover:opacity-100 duration-150 pointer-events-none shadow-md`}
                                style={{ backgroundColor: e.color == null ? "#262626" : e.color }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
            {colorMenu &&
                <div 
                    onContextMenu={e => e.preventDefault()} 
                    onMouseUp={e => handleMouseUp(e)} 
                    className="absolute bg-red-400 pop-fade-in" 
                    style={{ top: colorMenuPos.y, left: colorMenuPos.x }}
                >
                    {colors.map((e, i) => {
                        let width = 150
                        let moveUp = 20
                        let colorWidth = ( width / colors.length ) * ( i + 0.5 ) - ( width / 2 )

                        return (
                            <div 
                                key={i}
                                color={e.color}
                                className="bg-neutral-700 cursor-pointer w-6 aspect-square absolute rounded-full opacity-0 hover:scale-[115%] duration-100 ease-out group -translate-x-1/2 -translate-y-1/2 grid place-items-center shadow-md fade-in"
                                style={{
                                    top: `-${moveUp}px`,
                                    left: `${colorWidth}px`,
                                    animationDelay: `${i / 50}s`
                                }}
                            >
                                <div className={`pointer-events-none shadow-sm w-4 aspect-square rounded-full group-hover:scale-110 duration-150 ease-out`} style={{ backgroundColor: `${e.color}` }}></div>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}