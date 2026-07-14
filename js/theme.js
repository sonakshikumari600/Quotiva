// This file runs on every page before anything else loads.
// It checks if the user has picked a theme before and saves it.
// If no theme is saved, it uses "lavender" as the default.

const savedTheme = localStorage.getItem("selectedTheme") || "lavender";
document.documentElement.setAttribute("data-theme", savedTheme);
