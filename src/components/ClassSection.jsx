import TodoList from "./TodoList"

export default function ClassSection(props) {
    const { title } = props
    
    return (
        <section className="bg-stone-950 w-full flex flex-col justify-between">
            <div>
                <h2 className="text-center text-white font-semibold text-2xl py-3 bg-white/5">{title}</h2>
                <div className="flex flex-col p-2 gap-2">
                    {props.children}
                </div>
            </div>
            <TodoList localKey={title} />
        </section>
    )
}