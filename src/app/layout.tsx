import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <header className="m-3 p-4 font-serif text-5xl font-bold text-stone-500">
          The Cooking Hub
        </header>
        <nav className="flex h-[75px] flex-row items-center justify-center gap-20 bg-stone-500 text-stone-500">
          <p className="rounded-md bg-black px-3 text-lg font-extrabold">
            <Link href="/">Home</Link>
          </p>
          <p className="rounded-md bg-black px-3 text-lg font-extrabold">
            <Link href="chefs">Chefs</Link>
          </p>
          <p className="rounded-md bg-black px-3 text-lg font-extrabold">
            <Link href="recipes">Recipes</Link>
          </p>
          <p className="rounded-md bg-black px-3 text-lg font-extrabold">
            <Link href="account">Acccout</Link>
          </p>
        </nav>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
