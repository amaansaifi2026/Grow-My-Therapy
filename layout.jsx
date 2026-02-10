import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Configure Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dr. Maya Reynolds | Holistic Therapy",
  description: "Specialized therapy for the modern soul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-lightbg text-dark min-h-screen flex flex-col">
        <Navbar />
        {/* main grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}