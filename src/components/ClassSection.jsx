import TodoList from "./TodoList"

export default function ClassSection(props) {
    const { title, checklist } = props
    
    return (
        <section className="bg-black w-full flex flex-col justify-between">
            <div>
                <div className="relative">
                    <h2 className="text-center text-white font-semibold text-2xl py-3 z-0 animate-gradient-text">{title}</h2>
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