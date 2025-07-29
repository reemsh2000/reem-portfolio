export default function Services() {
	return (
		<div id="services" className="p-5 flex flex-col items-center my-20">
			<h2 className="my-5 hover:border-b-3 hover:border-amber-100 font-bold text-xl tracking-tight text-gray-900 dark:text-white">Services</h2>
			<div className="h-65 bg-amber-300 flex flex-col items-center rounded-2xl py-6 ">
				<p className="h-2/3 w-1/2 my-10 text-center dark:text-black">As a frontend developer, I specialize in bringing ideas to life with clean code and modern design. From dynamic web apps to seamless user experiences, I deliver high-quality interfaces that are fast, responsive, and built to scale.</p>
				<div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
					{/* Service 1 */}
					<div className="px-6 py-10 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-primary">Custom Web Applications</h3>
						<p className="text-sm text-gray-700 dark:text-gray-300">I build full-featured web apps using React or Angular, tailored to your needs. Fast, scalable, and user-focused.</p>
					</div>

					{/* Service 2 */}
					<div className="px-6 py-10 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-primary">UI/UX Implementation</h3>
						<p className="text-sm text-gray-700 dark:text-gray-300">I bring your designs to life using modern UI libraries like Material UI, PrimeNG, and Tailwind — clean, responsive, and pixel-perfect.</p>
					</div>

					{/* Service 3 */}
					<div className="px-6 py-10 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-primary">Integration & State Management</h3>
						<p className="text-sm text-gray-700 dark:text-gray-300">I connect your frontend to APIs and manage state with Redux, NGXS, or Context API — ensuring smooth data flow and performance.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
