import QuickLink from "@/components/QuickLink";
import ClassSection from "@/components/ClassSection";
import Utils from "@/components/Utils";
import Cursor from "@/components/Cursor";
import AiDetection from "@/components/AiDetection";
import Pages from "@/components/Pages";

export default function Home() {
	return (
		<main className="bg-neutral-950 h-screen w-screen select-none">
			<div className="max-w-[1500px] flex flex-col h-full border-x border-neutral-700/50 mx-auto fade-in">
				<h1 className="text-white text-center font-bold text-5xl py-5 tracking-wide border-b border-neutral-700/50">GMC Dashboard</h1>
				
				<Utils />
				{/* <Pages /> */}
				{/* <AiDetection />how do */}
				
				<div className="flex flex-row h-full justify-around gap-px bg-neutral-700/50">
					<ClassSection title={"Algebra"}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81166" />
						<QuickLink title={"Syllabus"} link="https://gmc.mrooms3.net/mod/book/view.php?id=7046287&chapterid=439071" />
						<QuickLink title={"MyLab"} link="https://mylabmastering.pearson.com/?courseId=12966713#/" />
					</ClassSection>
					
					<ClassSection title={"Leadership"} checklist={["150 word count on forum posts", "100 word count on forum post responses"]}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=82330" />
						<QuickLink title={"Syllabus"} link="https://gmc.mrooms3.net/mod/book/view.php?id=7228575&chapterid=469135" />
					</ClassSection>

					<ClassSection title={"English"} checklist={["make sure to cite under all forum posts"]}>
						<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81173"/>
						<QuickLink title={"Syllabus"} link="https://gmc.mrooms3.net/mod/book/view.php?id=7048062&chapterid=439233"/>
					</ClassSection>
				</div>




				{/* <Cursor /> */}
			</div>
		</main>
	);
}