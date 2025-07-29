"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	console.log({ theme, setTheme });

	return (
		<div className="flex">
			{theme === "system" ? <SunMoon /> : theme === "dark" ? <MoonIcon /> : <SunIcon />}
			<select  className="focus:outline-0"
			value={theme} onChange={(e) => setTheme(e.target.value)} name="theme">
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="system">System</option>
			</select>
		</div>
	);
}
