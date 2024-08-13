import QuickLink from "@/components/QuickLink";
import ClassSection from "@/components/ClassSection";

export default function Home() {

	return (
		<main className="bg-stone-950 h-screen w-screen flex flex-col">
			{/* <ul className="bg-green-700 text-white absolute top-5 left-5 rounded-md p-2">
				<li className="uppercase font-bold text-center mb-5">Todo List</li>
				<li>Quick Links</li>
				<li>Todo List For Each Class</li>
			</ul> */}
			<h1 className="text-white text-center font-bold text-5xl py-5 tracking-wide border-b border-white/20">GMC Dashboard</h1>
			<div className="flex flex-row h-full justify-around gap-px bg-white/20">
				<ClassSection title={"Algebra"}>
					<QuickLink title={"Moodle"} link="#" />
					<QuickLink title={"MyLab"} link="#" />
				</ClassSection>
				
				<ClassSection title={"Leadership"}>
					<QuickLink title={"Moodle"} link="#" />
				</ClassSection>

				<ClassSection title={"English"}>
					<QuickLink title={"Moodle"} link="#" />
				</ClassSection>
			</div>
		</main>
	);
}
