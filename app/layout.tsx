import type { Metadata } from "next";
import Nav from "./nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayank Rawat",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-400 max-w-2xl mx-5 md:mx-auto pb-20">
        <Nav />
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
