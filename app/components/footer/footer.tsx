import { FileUser, Github, Linkedin, MessageSquareMore } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4 relative">
			<Link className="return-home absolute -top-1 left-1/2 bg-amber-300 rounded-lg" href="#header">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35px" viewBox="0 0 24 24">
					<title></title> 
					<path
						fill="#fafafa"
						d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
				</svg>
			</Link>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
				{/* Contact Info */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Reem Shamia</h3>
					<p className="text-sm">Frontend Developer</p>
					<p className="text-sm">
						Email:{" "}
						<a href="mailto:reem.r.shamia@gmail.com" className="underline">
							reem.r.shamia@gmail.com
						</a>
					</p>
					<p className="text-sm">
						Phone:{" "}
						<a href="tel:+201015034816" className="underline">
							+20 101-503-4816
						</a>
					</p>
				</div>

				{/* Links */}
				<div className="flex gap-4 items-center">
					<Link href="https://github.com/reemsh2000" className="hover:underline text-sm">
						<span>
							<Github /> GitHub
						</span>
					</Link>
					<Link href="https://www.linkedin.com/in/reem-shamia/" className="hover:underline text-sm">
						<Linkedin />
						LinkedIn
					</Link>
					<Link
						href="https://wa.me/201015034816?text=Hi%20Reem%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!
"
						className="hover:underline text-sm">
						<MessageSquareMore />
						WhatsApp
					</Link>
					<Link href="/Reem-Shamia-CV.pdf" target="_blank" className="hover:underline text-sm">
						<FileUser />
						Download CV
					</Link>
				</div>
			</div>

			<div className="mt-6 text-center text-xs text-amber-300">&copy; {new Date().getFullYear()} Reem Shamia. All rights reserved.</div>
		</footer>
	);
}
