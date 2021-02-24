module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      mono: [
        "Roboto-Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      colors: {
        teal: "#00C9B6",
        "bp-gray-100": "#D8D8D8",
        "bp-gray": "#757575",
        "bp-yellow": "#FFEE82",
      },
      fontSize: {
        xxs: ".5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
