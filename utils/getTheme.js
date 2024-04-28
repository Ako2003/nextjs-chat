export const getTheme = () => {
    localStorage.setItem('theme', 'light');
    // Get the theme from local storage
    const theme = localStorage.getItem('theme');
    // If the theme is dark, return the dark theme
    if (theme === 'dark') {
        return 'dark';
    }
    // Otherwise, return the light theme
    return 'light';
}