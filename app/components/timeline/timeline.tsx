import { data } from "./timeline-data";
export default function Timeline() {
	return (
		<div className="p-5 flex flex-col items-center">
        <h2 className="my-10 hover:border-b-3 hover:border-amber-100 font-bold text-xl tracking-tight text-gray-900 dark:text-white">Work Experience</h2>
        <div className="flex">
			<ol className=" p-4 w-1/2 md:w-full ">
				{data.map((item, index) => {
					if (index % 2 === 0) {
						return (
							<li key={index} className="mb-10 ms-4 ">
								<div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
									<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.time}</time>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.company}</h3>
									<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.brief}</p>
								</div>
								<div className="pt-30"></div>
							</li>
						);
					}
				})}
			</ol>
			<ol className="relative border-s border-gray-200 dark:border-gray-700 p-4 w-1/2 md:w-full ">
				{data.map((item, index) => {
					if (index % 2 !== 0) {
						return (
							<li key={index} className="mb-10 ms-4">
								<div className="pt-30"></div>
								<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-15 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
								<div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

								<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.time}</time>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.company}</h3>
								<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.brief}</p>
                                </div>
							</li>
						);
					} else {
						return <div key={`${index}bullet`} className="mt-10 absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>;
					}
				})}
			</ol>
            </div>
		</div>
	);
}
