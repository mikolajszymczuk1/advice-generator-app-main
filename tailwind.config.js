module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            // === Primary ===
            "light-cyan": "hsl(193, 38% 86%)",
            "neon-green": "hsl(150, 100%, 66%)",
            
            // === Neutral ===
            "grayish-blue": "hsl(217, 19%, 38%)",
            "dark-grayish-blue": "hsl(217, 19%, 24%)"
        },
        fontFamily: {
            "body": ["Manrope", "sans-serif"]
        }
    },
    plugins: [],
}
