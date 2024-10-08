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
      boxShadow: {
        shadow_sm: "var(--shadow_sm)",
      },
      backgroundImage: {
        bg_radial_darkblue: "var(--bg_radial_darkblue)",
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
        mulish: ["var(--font-mulish)"],
        syne: ["var(--font-syne)"],
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
        custom: "repeat(6, calc((100% - 1rem * 5) / 6))",
        custom_md: "repeat(8, calc((100% - 28px * 7) / 8))",
        custom_lg: "repeat(12, calc((69.375rem - 28px * 11) / 12))",
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

        para: "rgb(var(--para))",
        para_bg: "rgb(var(--para_bg))",
        para_blue: "var(--para_blue)",

        color_back: "var(--color_back)",
        color_front: "var(--color_front)",
        color_front_hover: "var(--color_front_hover)",

        outline_zinc_200: "var(--outline_zinc_200)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        dullPink: "var(--dullPink)", // #7c7287;
        aquagreen: "var(--aquagreen)", // #baffdf;
        aquacyan: "var(--aquacyan)", // #c1fff2;
        ashGray: "var(--ashGray)", // #9dc0bc;

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
