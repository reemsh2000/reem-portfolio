export default function Contact() {

	return (
		<div id="contact"className="px-5 flex flex-col items-center py-15">
			<h2 className="my-5 hover:border-b-3 hover:border-amber-100 font-bold text-xl tracking-tight text-gray-900 dark:text-white">Contact</h2>
			<form  action="https://formspree.io/f/xblkyqnb" method="POST" className="flex flex-col md:w-xl w-full">
				<div className="">
					<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Name
					</label>
					<input
						type="text"
						id="first_name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Reem "
						required
						name="name"
					/>
				</div>
				<div className="my-2">
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="reem.r.shamia@gmail.com"
						required
						name="email"
					/>
				</div>
				<div className="my-3">
					<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your message
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Write your thoughts here..."></textarea>
				</div>
				<button type="submit" className="text-black bg-amber-200 hover:bg-amber-300 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-amber-200 dark:hover:bg-amber-300 focus:outline-none dark:focus:ring-amber-300">
					Send
				</button>
			</form>
		</div>
	);
}
