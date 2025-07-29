import { FileUser, Github, Linkedin, MessageSquareMore } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4">
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
