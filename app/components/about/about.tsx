import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { Button } from "@heroui/react";
export default function About() {
	return (
		<div className="flex flex-col md:flex-row  justify-between cols-2">
			<div className="about-section p-8 w-1/2  md:w-full flex justify-center">
				<div className="py-5 w-2/3 flex flex-col justify-center">
					<span className="font-semibold my-2  text-xs color-primary">Front-end Developer </span>
					<h2 className="font-bold text-4xl  my-2 ">Hello, my name </h2>
					<h2 className="font-bold text-4xl  my-2 mb-2 ">is Reem Shamia </h2>
					<p className="text-wrap ">I&apos;m Reem Shamia, a frontend developer with a strong background in Angular, React, and modern web technologies. I craft clean, responsive, and high-performance user interfaces with a focus on usability and detail.</p>
					<div className="mt-5">
						<Link role="button" href="https://github.com/reemsh2000">
							<button
								type="button"
								className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
								Github
							</button>
						</Link>

						<Link href="https://www.linkedin.com/in/reem-shamia/">
							<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
								LinkedIn
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="image-section px-2 w-1/2 md:w-full md:">
				<div className="container">
					<Image className="absolute top-0 right-0 -z-1" src="/yellow-bg.svg" alt="bg image" width={600} height={400} />
					<Image src="/pexels-artem-beliaikin-1832323-removebg-preview.svg" className="absolute right-0" alt="Reem Shamia image" width={470} height={470} />
				</div>
			</div>
		</div>
	);
}
