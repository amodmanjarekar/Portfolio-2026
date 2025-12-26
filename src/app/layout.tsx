import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amod Manjarekar",
  description: "Portfolio website for Amod Manjarekar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
