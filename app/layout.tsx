import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { HeaderHero } from "@/components/header-hero";
import { Navbar } from "@/components/navbar";
import { twMerge } from "tailwind-merge";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={twMerge("h-full")} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hwn1obq.css" />
      </head>
      <body className="h-full border border-black bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-full h-full flex flex-col gap-6 items-center">
            <nav className="w-full flex flex-col items-center border-t-8 border-brand-main">
              <Link className="py-12" href={"/"}>
                <HeaderHero />
              </Link>
              <Navbar />
            </nav>
            <div className="flex flex-grow flex-col gap-20 max-w-5xl p-5">
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
