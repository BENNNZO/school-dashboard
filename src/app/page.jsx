import QuickLink from "@/components/QuickLink";
import ClassSection from "@/components/ClassSection";
import Utils from "@/components/Utils";

export default function Home() {
	return (
		<main className="bg-black h-screen w-screen select-none">
			<div className="max-w-[1500px] flex flex-col h-full border-x border-neutral-900 mx-auto fade-in">
				<h1 className="text-center font-bold text-5xl py-5 tracking-wide border-b border-neutral-900 animate-gradient-text">
					GMC Dashboard
				</h1>
				<Utils />
				<div className="flex flex-row h-full justify-around gap-px bg-neutral-800/50">
					<ClassSection title={"English 102"}>
						<QuickLink title={"Modules"} link="https://gmcusa.instructure.com/courses/2936/modules" />
						<QuickLink title={"Syllabus"} link="https://gmcusa.instructure.com/courses/2936/assignments/syllabus" />
						<QuickLink title={"Grades"} link="https://gmcusa.instructure.com/courses/2936/grades" />
					</ClassSection>

					<ClassSection title={"Intro To Computer Science"}>
						<QuickLink title={"Modules"} link="https://gmcusa.instructure.com/courses/2928/modules" />
						<QuickLink title={"Syllabus"} link="https://gmcusa.instructure.com/courses/2928/assignments/syllabus" />
						<QuickLink title={"Grades"} link="https://gmcusa.instructure.com/courses/2928/grades" />
					</ClassSection>

					<ClassSection title={"Wellness"}>
						<QuickLink title={"Modules"} link="https://gmcusa.instructure.com/courses/2907/modules" />
						<QuickLink title={"Syllabus"} link="https://gmcusa.instructure.com/courses/2907/assignments/syllabus" />
						<QuickLink title={"Grades"} link="https://gmcusa.instructure.com/courses/2907/grades" />
					</ClassSection>
				</div>
			</div>
		</main>
	)
}

// ------------------------------------------------------------------------------------------------------
// YEAR 1 | QUARTER 3 -----------------------------------------------------------------------------------

// Pre-Calculus
// Moodle: https://gmc.mrooms3.net/course/view.php?id=86105
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7552148&chapterid=509163

// American Government
// Moodle: https://gmc.mrooms3.net/course/view.php?id=86139
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7556846&chapterid=509787

// English III
// Canvas: https://gmcusa.instructure.com/courses/1522
// Syllabus: https://gmcusa.instructure.com/courses/1522/pages/course-schedule-2

// ------------------------------------------------------------------------------------------------------
// YEAR 1 | QUARTER 2 -----------------------------------------------------------------------------------

// Algebra
// Moodle: https://gmc.mrooms3.net/course/view.php?id=83664
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7328786&chapterid=478041

// American History
// Moodle: https://gmc.mrooms3.net/course/view.php?id=83635
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7324549&chapterid=477531

// English II
// Moodle: https://gmc.mrooms3.net/course/view.php?id=83608
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7320550&chapterid=476966

// ------------------------------------------------------------------------------------------------------
// YEAR 1 | QUARTER 1 -----------------------------------------------------------------------------------

// Algebra
// Moodle: https://gmc.mrooms3.net/course/view.php?id=81166
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7046287&chapterid=439071
// MyLab: https://mylabmastering.pearson.com/?courseId=12966713#/

// Leadership
// Moodle: https://gmc.mrooms3.net/course/view.php?id=82330
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7228575&chapterid=469135

// English
// Moodle: https://gmc.mrooms3.net/course/view.php?id=81173
// Syllabus: https://gmc.mrooms3.net/mod/book/view.php?id=7048062&chapterid=439233

// ------------------------------------------------------------------------------------------------------