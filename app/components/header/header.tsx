import { ThemeSwitcher } from "@/app/components/header/toggle-mode";
import Link from "next/link";

export default function Header() {
  return (
    <div>
        <div className="flex justify-between p-4 flex-col md:flex-row text-gray-900 dark:text-white">
            <div className="font-bold p-3">Reem Shamia</div>
            <div className="flex justify-between p-3">
               <ThemeSwitcher/>
                <Link href="#about"className="mx-4 hover:border-b-3 hover:border-amber-100">About</Link>
                <Link href="#skills"className="mx-4 hover:border-b-3 hover:border-amber-100">Skills</Link>
                <Link href="#experience"className="mx-4 hover:border-b-3 hover:border-amber-100">Experience</Link>
                <Link href="#contact"className="mx-4 hover:border-b-3 hover:border-amber-100">Contact</Link>
            </div>
        </div>
    </div>
  )
}
