export default function QuickLink(props) {
    const { title, link } = props

    return (
        <button className="bg-neutral-900/50 text-white rounded-sm hover:bg-neutral-900 duration-100 group py-2 border border-neutral-800/50 shadow-md overflow-hidden">
            <a href={link} target="_blank" className="p-2 grid place-items-center">
                <div className="relative h-8 w-full">
                    <p className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 blur-0 scale-100 group-hover:blur-sm group-hover:scale-50 group-hover:translate-y-2 group-hover:opacity-0 duration-300">{title}</p>
                    <p className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 opacity-0 blur-sm scale-50 group-hover:blur-0 group-hover:scale-100 group-hover:-translate-y-1/2 group-hover:opacity-100 duration-300">{title}</p>
                </div>
            </a>
        </button>
    )
}