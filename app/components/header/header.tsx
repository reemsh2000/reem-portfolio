import { ThemeSwitcher } from "@/app/components/header/toggle-mode";

export default function Header() {
  return (
    <div>
        <div className="flex justify-between p-4  text-gray-900 dark:text-white">
            <div className="font-bold p-3">Reem Shamia</div>
            <div className="grid grid-cols-4 p-3">
               <ThemeSwitcher/>
                <span className="mx-2">About</span>
                <span>Skills</span>
                <span>Contact</span>
            </div>
        </div>
    </div>
  )
}
