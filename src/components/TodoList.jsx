'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

import TrashIcon from '/public/assets/trash.svg'
import PlusIcon from '/public/assets/plus.svg'

export default function TodoList(props) {
    const { localKey } = props

    const [list, setList] = useState([])

    useEffect(() => {
        const storedArray = localStorage.getItem(localKey)
        
        if (storedArray) {
            setList(JSON.parse(storedArray))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(list))
    }, [list])

    return (
        <section className="bg-white/5 rounded-sm mx-2 mb-2 text-white">
            <div className="flex flex-row justify-between bg-white/5 p-2">
                <h2 className="font-bold tracking-wide">Todo</h2>
                <Image
                    src={PlusIcon}
                    width={25}
                    height={25}
                    className="invert bg-black/20 w-7 aspect-square my-auto rounded-sm hover:bg-black/30 duration-100"
                    alt="add todo button"
                    onClick={() => {
                        let text = prompt("TODO")

                        setList(prev => [...prev, text])
                    }}
                />
            </div>
            <ul>
                {list.map((e, i) => (
                    <div key={i} className="border-t border-white/20 py-1.5 flex flex-row justify-between group px-2">
                        <p>{e}</p>
                        <Image
                            src={TrashIcon}
                            width={25}
                            height={25}
                            alt="delete todo button"
                            className="opacity-0 group-hover:opacity-100 duration-100 hover:bg-red-400/20 w-6 p-1 rounded-sm"
                            onClick={() => setList(prev => {
                                let newArr = [...prev]
                                newArr.splice(i, 1)
                                return newArr
                            })}
                        />
                    </div>
                ))}
            </ul>
        </section>
    )
}