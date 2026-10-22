import "./globals.css";

export const metadata = {
  title: "Cheesy Crust Pizza | Woodfired Slices & Gemini AI Order Assistant",
  description: "Experience artisanal woodfired pizza at Cheesy Crust Pizza. Savor our famous Large Pepperoni ($15), Medium Veggie ($12), and Garlic Bread ($5) delivered in 30-45 minutes. Powered by our smart Gemini AI customer assistant.",
  keywords: ["pizza", "cheesy crust pizza", "pepperoni pizza", "fast delivery", "gemini chatbot", "ai customer assistant", "woodfired pizza"],
  authors: [{ name: "Cheesy Crust Pizza" }]
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
