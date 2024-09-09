/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      site_lg: "1110px",
      xl: "1200px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        bg_radial_darkblue: "var(--bg_radial_darkblue)",
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
        mulish: ["var(--font-mulish)"],
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 0.6s linear",
      },
      variants: {
        extend: {
          animation: ["group-hover"],
        },
      },

      gridTemplateColumns: {
        custom: "4px repeat(6, calc((100% - 48px - 20px * 5) / 6)) 4px",
        custom_md: "12px repeat(8, calc((100% - 80px - 28px * 7) / 8)) 12px",
        custom_lg: "1fr repeat(12, calc((69.375rem - 28px * 11) / 12)) 1fr",
      },
      colors: {
        // CUSTOM_COLORS

        primary_sky: "var(--primary_sky)",
        primary: "var(--primary)", //#afe6c3
        primary_light: "var(--primary_light)", //#f3f3f3
        primary_bright: "var(--primary_bright)", //#30d46f
        primary_dark: "var(--primary_dark)", //#01493c
        primary_dark2: "var(--primary_dark2)", //#01493c

        secondary: "var(--secondary)", //#e9edff

        tertiary_light: "var(--tertiary_light)", //#e9edff

        para: "var(--para)",
        para_blue: "var(--para_blue)",
        para_bg: "var(--para_bg)",

        color_back: "var(--color_back)",
        color_front: "var(--color_front)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
