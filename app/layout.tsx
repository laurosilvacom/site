import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const commitMono = localFont({
  src: [
    {
      path: "./CommitMonoV143/CommitMono-400-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CommitMonoV143/CommitMono-400-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CommitMonoV143/CommitMono-700-Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./CommitMonoV143/CommitMono-700-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-commitmono",
  display: "swap",
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
      <html lang="en" className={`${inter.variable} ${commitMono.variable}`}>
        <body className="antialiased font-sans text-base leading-relaxed bg-gray-200 text-gray-1100">
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
    <footer className="py-8 border-t border-gray-400">
      <div className="flex justify-center space-x-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-1200 transition-colors duration-200 hover:no-underline text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
