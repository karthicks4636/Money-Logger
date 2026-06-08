/** @type {import('tailwindcss').Config} */
// Money Logger design system — shadcn/ui design language ported to Django templates.
// Build:  npm run css   (see package.json) or run tools/tailwindcss.exe directly.
module.exports = {
  darkMode: "class",
  content: [
    "./templates/**/*.html",
    "./**/templates/**/*.html",
  ],
  // Component classes are assembled dynamically inside Django include partials
  // (e.g. class="btn-{{ variant }}"), so the content scanner can't always see the
  // final class name. Safelist the design-system classes so the library always ships.
  safelist: [
    "btn", "btn-primary", "btn-secondary", "btn-outline", "btn-ghost",
    "btn-destructive", "btn-success", "btn-sm", "btn-lg", "btn-icon", "btn-icon-sm",
    "card", "card-header", "card-title", "card-description", "card-content", "card-footer",
    "badge", "badge-default", "badge-secondary", "badge-outline", "badge-destructive",
    "badge-success", "badge-warning", "badge-muted",
    "label", "input", "select", "textarea", "field", "field-error",
    "table-wrap", "table", "page-title", "section-title", "caption",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out both",
        "slide-down": "slide-down 0.18s ease-out",
        "scale-in": "scale-in 0.18s ease-out",
      },
    },
  },
  plugins: [],
};
