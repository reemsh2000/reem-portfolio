import About from "@/app/components/about/about";
import Timeline from "@/app/components/timeline/timeline";
import Skills from "@/app/components/skills/skills";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/footer";
export default function Home() {
	return (
		<main>
		<About/>
		<Skills/>
		<Timeline/>
		<Contact/>
		<Footer/>
		</main>
	);
}
