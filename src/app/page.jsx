import QuickLink from "@/components/QuickLink";
import ClassSection from "@/components/ClassSection";
import Utils from "@/components/Utils";

export default function Home() {

	return (
		<main className="bg-neutral-950 h-screen w-screen select-none">
			<div className="max-w-[1500px] flex flex-col h-full border-x border-white/20 mx-auto fade-in">
				<h1 className="text-white text-center font-bold text-5xl py-5 tracking-wide border-b border-white/20">GMC Dashboard</h1>
				
				<Utils />
				
				<div className="flex flex-row h-full justify-around gap-px bg-white/20">
					<ClassSection title={"Algebra"}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81166" />
						<QuickLink title={"MyLab"} link="https://mylabmastering.pearson.com/?courseId=12966713#/" />
					</ClassSection>
					
					<ClassSection title={"Leadership"}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=82330" />
					</ClassSection>

					<ClassSection title={"English"}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81173"/>
					</ClassSection>
				</div>
			</div>
		</main>
	);
}