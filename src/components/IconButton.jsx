import Image from "next/image"

export default function IconButton(props) {
    const { href, icon, name, setCopied, setPromptsModal } = props
    
    return (
        <li className="bg-neutral-900/50 cursor-pointer hover:bg-neutral-900 duration-100 rounded-sm h-12 aspect-square shadow-md group relative">
            <a href={href} target="_blank" className="w-full h-full grid place-items-center" onContextMenu={e => {
                e.preventDefault()
                
                if (name === "E-Mail") {
                    setCopied(true)
                    navigator.clipboard.writeText("bphillips0826@bulldog.gmc.edu")
                } else if (name === "AI") {
                    setPromptsModal(true)
                }
            }}>
                <Image src={icon} width={30} height={30} className="invert" alt={name} />
            </a>
        </li>
    )
}