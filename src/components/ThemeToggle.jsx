import { useState } from "react";
import { Sun, Moon } from "lucide-react";
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };
  return (
    <button>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 " onClick={toggleTheme} />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" onClick={toggleTheme} />
      )}
    </button>
  );
}

export default ThemeToggle;
