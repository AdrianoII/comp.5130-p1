import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import NavBar from "./components/navbar";

export const metadata: Metadata = {
  title: "Adriano Corbelino II",
  description: "Personal page of Adriano Corbelino II",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased bg-base-300`} data-theme="dracula">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={``}
      >
        <a href="#mainctt" className="hidden absolute ">Skip to main content.</a>
        <AppRouterCacheProvider>
          <NavBar />
          <main id="mainctt" className="flex flex-col items-center bg-base-100 rounded-xl justify-items-center mx-8 mb-8 p-8 min-h-[85vh]" role="main">
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
