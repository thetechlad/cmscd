import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/** Light/dark toggle. Renders an empty placeholder until mounted since
 * resolvedTheme is undefined on the server/first paint — avoids a
 * mismatched icon flashing in before the real theme is known. */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors"
    >
      {mounted && (resolvedTheme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />)}
    </button>
  );
};

export default ThemeToggle;
