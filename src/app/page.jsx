import QuickLink from "@/components/QuickLink";
import ClassSection from "@/components/ClassSection";

export default function Home() {

	return (
		<main className="bg-stone-950 h-screen w-screen flex flex-col">
			<h1 className="text-white text-center font-bold text-5xl py-5 tracking-wide border-b border-white/20">GMC Dashboard</h1>
			<div className="flex flex-row h-full justify-around gap-px bg-white/20">
				<ClassSection title={"Algebra"}>
					<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81166" />
					<QuickLink title={"MyLab"} link="https://mylabmastering.pearson.com/?courseId=12966713#/" />
					{/* <QuickLink title={"MyLab1"} link="https://socket.pearsoned.com/uiservice/optstatus/#/optstatus" /> */}
					{/* <QuickLink title={"MyLab2"} link="https://tpi.bb.pearsoncmg.com/tpi/lti/basic/pearson/ext/" /> */}
				</ClassSection>
				
				<ClassSection title={"Leadership"}>
					<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=82330" />
				</ClassSection>

				<ClassSection title={"English"}>
					<QuickLink title={"Moodle"} link="https://gmc.mrooms3.net/course/view.php?id=81173"/>
				</ClassSection>
			</div>
		</main>
	);
}
