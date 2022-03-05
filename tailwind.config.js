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
            "grayish-blue": "hsl(218, 20%, 24%)",
            "dark-grayish-blue": "hsl(220, 22%, 16%)"
        },
        fontFamily: {
            "body": ["Manrope", "sans-serif"]
        },
        screens: {
            "md": "540px",
            "lg": "1440px"
        }
    },
    plugins: [],
}
