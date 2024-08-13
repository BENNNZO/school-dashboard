export default function QuickLink(props) {
    const { title, link } = props

    return (
        <button className="bg-white/10 text-white rounded-sm hover:bg-white/20 duration-100">
            <a href={link} target="_blank" className="p-2">
                <p className="text-lg">{title}</p>
            </a>
        </button>
    )
}