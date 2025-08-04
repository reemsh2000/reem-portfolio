import './style.css'
export default function Skills() {
	const skillCategories = [
		{
			title: "Languages",
			color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
			items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Java (familiar)", "Python (familiar)"],
		},
		{
			title: "Frameworks & Libraries",
			color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
			items: [ "ReactJS","Angular", "NextJS", "ExpressJS", "PostgreSQL", "Flutter (basic)"],
		},
		{
			title: "UI Libraries",
			color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
			items: ["Material UI", "Ant Design", "PrimeNG", "Syncfusion", "Tailwindcss", "HeroUI"],
		},
		{
			title: "State Management",
			color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
			items: ["Redux", "Context API", "NGXS"],
		},
		{
			title: "Tools & Technologies",
			color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
			items: ["Firebase Cloud Functions", "Git/GitHub", "RxJS","Socket.io"],
		},
		{
			title: "Testing",
			color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
			items: ["CodeceptJS"],
		},
	];
	return (
		<div id="skills" className="p-5 flex flex-col items-center">
			<h2 className="my-10 hover:border-b-3 hover:border-amber-100 font-bold text-xl tracking-tight text-gray-900 dark:text-white">Skills</h2>

			<div className="max-w-5xl mx-auto space-y-8">
				{skillCategories.map(({ title, items, color }) => (
					<div key={title}>
						<h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
						<div className="flex flex-wrap gap-3">
							{items.map((skill) => (
								<span key={skill} className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${color} language`}>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
