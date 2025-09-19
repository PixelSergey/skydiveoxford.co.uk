import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sky-gradient': 'var(--sky-gradient)',
        'cloud-gradient': 'var(--cloud-gradient)',
        'horizon-gradient': 'var(--horizon-gradient)',
      },
      boxShadow: {
        'sky': 'var(--sky-shadow)',
        'cloud': 'var(--cloud-shadow)', 
        'elevation': 'var(--elevation-shadow)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(24px)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)" 
          },
        },
        "gentle-bounce": {
          "0%, 20%, 53%, 80%, 100%": { transform: "translateY(0)" },
          "40%, 43%": { transform: "translateY(-8px)" },
          "70%": { transform: "translateY(-4px)" },
        },
        "skydive-left": {
          "0%": { 
            transform: "translateY(-50px) translateX(0px) rotate(0deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(100vh) translateX(-60px) rotate(-15deg)",
            opacity: "0.3"
          },
        },
        "skydive-right": {
          "0%": { 
            transform: "translateY(-50px) translateX(0px) rotate(0deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(100vh) translateX(60px) rotate(15deg)",
            opacity: "0.3"
          },
        },
        "skydive-center": {
          "0%": { 
            transform: "translateY(-50px) translateX(0px) rotate(0deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(100vh) translateX(0px) rotate(0deg)",
            opacity: "0.3"
          },
        },
        "airplane-cross": {
          "0%": { 
            transform: "translateX(-120px) translateY(0px)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(calc(100vw + 120px)) translateY(0px)",
            opacity: "1"
          },
        },
        "airplane-cross-reverse": {
          "0%": { 
            transform: "translateX(calc(100vw + 120px)) translateY(0px) scaleX(-1)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(-120px) translateY(0px) scaleX(-1)",
            opacity: "1"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float var(--float-duration) var(--gentle-bounce) infinite",
        "float-delayed": "float-delayed calc(var(--float-duration) * 1.2) var(--gentle-bounce) infinite 2s",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "gentle-bounce": "gentle-bounce 2s ease-in-out infinite",
        "skydive-left": "skydive-left var(--skydive-duration) linear infinite var(--skydive-delay-1)",
        "skydive-right": "skydive-right var(--skydive-duration) linear infinite var(--skydive-delay-2)",
        "skydive-center": "skydive-center var(--skydive-duration) linear infinite var(--skydive-delay-3)",
        "airplane-cross": "airplane-cross var(--airplane-duration) linear",
        "airplane-cross-reverse": "airplane-cross-reverse var(--airplane-duration) linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
