import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCompEngine | AI-Powered Multi-Threaded Calculator",
  description: "Enterprise-grade mathematical computation platform utilizing multi-threaded operations and AI natural language processing for high-speed arithmetic, matrix operations, and complex calculus.",
  keywords: ["calculator", "AI calculator", "multi-threaded", "mathematics", "AST", "OCompEngine", "NLP math"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "OCompEngine | Advanced Computational Engine",
    description: "Solve complex problems with extreme scale and natural language.",
    url: "https://ocompengine.com",
    siteName: "OCompEngine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
