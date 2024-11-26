import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laurosilva.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Lauro Silva",
    template: "%s | Lauro Silva",
  },
  description: "Frontend developer, ultra runner, community builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
        <body className="antialiased font-sans text-base leading-relaxed bg-[#010b14] text-gray-300">
          <div className="min-h-screen flex flex-col justify-between">
            <main className="flex-1 max-w-screen-md mx-auto w-full px-6 md:px-8 py-12">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: "YouTube", url: "https://www.youtube.com/@laurosilvacom" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/laurosilvacom" },
    { name: "GitHub", url: "https://github.com/laurosilvacom" },
  ];

  return (
    <footer className="py-8 border-t border-slate-900">
      <div className="flex justify-center space-x-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
