import TodoList from "./TodoList"

export default function ClassSection(props) {
    const { title } = props
    
    return (
        <section className="bg-neutral-950 w-full flex flex-col justify-between">
            <div>
                <h2 className="text-center text-white font-semibold text-2xl py-3">{title}</h2>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
                <div className="flex flex-col p-2 gap-2">
                    {props.children}
                </div>
            </div>
            <TodoList localKey={title} />
        </section>
    )
}