import About from "@/app/components/about/about";
import Timeline from "@/app/components/timeline/timeline";
import Skills from "@/app/components/skills/skills";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/footer";
import Services from "@/app/components/services/services";
export default function Home() {
	return (
		<main>
		<About/>
		<Skills/>
		<Timeline/>
		<Services/>
		<Contact/>
		<Footer/>
		</main>
	);
}
