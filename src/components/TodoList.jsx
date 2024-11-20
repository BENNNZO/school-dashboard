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

        // console.log(e.target.getAttribute("color"))
        // Test if the click is a right click
        if (e.button == 2) {
            console.log("Right Up")

            setList(prevList => {
                let newList = [...prevList]

                // console.log(target.getAttribute("index"))
                newList[target.getAttribute("index")].color = e.target.getAttribute("color")
                return newList
            })

            setColorMenu(false)
        }
    }

    return (
        <section className="bg-neutral-900/50 rounded-sm mx-2 mb-2 text-white border border-neutral-800/50 shadow-md" onContextMenu={e => e.preventDefault()}>
            {/* <div className="bg-red-400 text-yellow-400 absolute top-0 left-0 px-4 py-2">
                {JSON.stringify(colorMenuPos)}
            </div> */}
            <div className="flex flex-row justify-between p-2">
                <h2 className="font-bold tracking-wide" onDoubleClick={() => console.log(resetList())}>Todo</h2>
                <Image
                    src={PlusIcon}
                    width={25}
                    height={25}
                    className="invert bg-black/10 w-7 aspect-square my-auto rounded-sm hover:bg-black/20 duration-100 cursor-pointer"
                    alt="add todo button"
                    onClick={() => {
                        let text = prompt("TODO")

                        setList(prev => [...prev, { text, color: null }])
                    }}
                />
            </div>
            <ul>
                {/* <pre>{JSON.stringify(list, null, 4)}</pre> */}
                {list.map((e, i) => (
                    <li
                        key={i}
                        index={i}
                        className="border-t border-neutral-800/50 py-1.5 flex flex-row justify-between group px-2"
                        onContextMenu={e => e.preventDefault()}
                        onMouseDown={e => handleMouseDown(e)}
                        onMouseUp={e => handleMouseUp(e)}

                        // onMouseUp={(e) => {
                        //     e.preventDefault()
                        //     if (e.button == 2) {
                        //         console.log("Right Cick UP")
                        //     } else {
                        //         console.log("Other UP")
                        //     }
                        // }}
                        // onMouseDown={(e) => {
                        //     e.preventDefault()
                        //     if (e.button == 2) {
                        //         console.log("Right Cick DOWN")
                        //     } else {
                        //         console.log("Other DOWN")
                        //     }
                        // }}
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
                                className={`w-4 h-4 rounded-full opacity-75 group-hover:opacity-100 duration-150 pointer-events-none`}
                                style={{ backgroundColor: e.color == null ? "#262626" : e.color }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
            {colorMenu &&
                // its kinda jankey but this outer div centers it even though 7 isnt half of 16?
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
                                    color={e.color}
                                    className="bg-neutral-700 cursor-pointer w-6 aspect-square absolute rounded-full opacity-0 hover:scale-[115%] duration-100 ease-out group -translate-x-1/2 -translate-y-1/2 grid place-items-center shadow-md fade-in"
                                    style={{
                                        top: `-${moveUp}px`,
                                        left: `${colorWidth}px`,
                                        animationDelay: `${i / 50}s`
                                    }}
                                >
                                    <div className={`pointer-events-none w-4 aspect-square rounded-full group-hover:scale-110 duration-150 ease-out`} style={{ backgroundColor: `${e.color}` }}></div>
                                </div>
                            )
                        })}
                        {/* <div className="w-[40%] h-[40%] hover:w-1/2 hover:h-1/2 -translate-x-1/2 -translate-y-1/2 absolute duration-150 backdrop-blur-sm top-0 left-0     bg-red-400/75 hover:bg-red-400/100 rounded-tl-[80%]" color="red"></div>
                        <div className="w-[40%] h-[40%] hover:w-1/2 hover:h-1/2 -translate-x-1/2 -translate-y-1/2 absolute duration-150 backdrop-blur-sm top-1/2 left-0   bg-blue-400/75 hover:bg-blue-400/100 rounded-bl-[80%]" color="blue"></div>
                        <div className="w-[40%] h-[40%] hover:w-1/2 hover:h-1/2 -translate-x-1/2 -translate-y-1/2 absolute duration-150 backdrop-blur-sm top-1/2 left-1/2 bg-green-400/75 hover:bg-green-400/100 rounded-br-[80%]" color="green"></div>
                        <div className="w-[40%] h-[40%] hover:w-1/2 hover:h-1/2 -translate-x-1/2 -translate-y-1/2 absolute duration-150 backdrop-blur-sm top-0 left-1/2   bg-yellow-400/75 hover:bg-yellow-400/100 rounded-tr-[80%]" color="yellow"></div> */}
                        {/* <div className="w-[90%] h-[90%] translate-x-[5%] translate-y-[5%] bg-neutral-700 rounded-full pointer-events-none"></div> */}
                    </div>
            }
        </section>
    )
}