export default function QuickLink(props) {
    const { title, link } = props

    return (
        <button className="bg-neutral-900/50 text-white rounded-sm hover:bg-neutral-900 duration-100 group py-2">
            <a href={link} target="_blank" className="p-2 grid place-items-center">
                <div className="relative h-8 w-full overflow-hidden">
                    <p className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-12 duration-150">{title}</p>
                    <p className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 group-hover:-translate-y-1/2 duration-150">{title}</p>
                </div>
            </a>
        </button>
    )
}