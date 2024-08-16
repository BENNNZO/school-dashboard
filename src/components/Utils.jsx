"use client"

import { useState } from "react"
import YouTube from "react-youtube";
import Image from "next/image";

import ArrowIcon from '/public/assets/arrow.svg'

export default function Utils() {
    const [selectedStream, setSelectedStream] = useState("jfKfPfyJRdk");
    const [dropdown, setDropdown] = useState(false)

    const streams = [
        { title: 'Chill', id: 'jfKfPfyJRdk' },
        { title: 'Synth', id: '4xDzrJKXOOY' },
        { title: 'Jazzy', id: '4oStw0r33so' }
    ]

    function getKeyByValue(array, value) {
        const foundObject = array.find(obj => obj.id === value);
        return foundObject ? foundObject.title : null;
    }

    return (
        <section className="border-b border-white/20">
            <div>
                <div className="w-80 bg-neutral-900 cursor-pointer rounded-sm py-2 px-4 m-2 relative z-20" onClick={() => setDropdown(prev => !prev)}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-white">♫ &gt; {getKeyByValue(streams, selectedStream).toUpperCase()}</p>
                        <Image 
                            src={ArrowIcon} 
                            width={25}
                            height={25}
                            className={`invert ${dropdown ? 'rotate-90' : 'rotate-0'} duration-100`}
                        />
                    </div>
                    {dropdown ? (
                        <ul className="absolute text-white overflow-hidden border fade-in border-white/10 bg-neutral-800/20 backdrop-blur-xl shadow-md rounded-sm top-full left-0 w-full flex flex-col mt-1">
                            {streams.map((e, i) => {
                                return (
                                    <li className="px-4 py-2 hover:bg-neutral-300/5 duration-50" onClick={() => setSelectedStream(e.id)}>{e.title}</li>
                                )
                            })}
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
                {dropdown ? (
                        <div className="bg-black/50 absolute top-0 left-0 w-full h-full z-10 fade-in backdrop-blur-sm" onClick={() => setDropdown(prev => !prev)}></div>
                    ) : (
                        ""
                    )}
                <div style={{ width: '0', height: '0', overflow: 'hidden' }}>
                    <YouTube videoId={selectedStream} opts={{ playerVars: { autoplay: 1 } }}/>
                </div>
            </div>
        </section>
    )
}
