import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { HeaderHero } from "@/components/header-hero";
import { NavBar } from "@/components/navbar";
import { Menu } from "iconoir-react";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/navmenu";

const defaultUrl = process.env.DEPLOYMENT_URL
  ? `https://${process.env.DEPLOYMENT_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Mazlin Rhea Photography",
  description:
    "Welcome, fellow dreamer! I'm so happy our paths have crossed. I'm Mazlin, a wedding photographer who is here to capture the magic in your love story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-brand-main" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hwn1obq.css" />
      </head>
      <body className="h-full bg-brand-main text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-full h-full flex flex-col gap-4 items-center bg-background overflow-y-auto">
            <nav className="w-full flex flex-col pt-4 md:pt-12 gap-12 items-center border-t-8 border-brand-main">
              <div className="relative text-center w-full px-2">
                <NavMenu />
                <Link className="inline-block m-auto" href="/">
                  <HeaderHero />
                </Link>
              </div>
              <NavBar />
            </nav>

            <div className="flex flex-grow flex-col gap-20 max-w-full w-[65ch] p-5">
              {children}
            </div>

            <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
              footer
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
