import type { Metadata } from "next";
import "./globals.css";
import VHProvider from "@/components/vh";

export const metadata: Metadata = {
  title: "Prohose",
  description: "Fresh groceries delivered with speed and quality.",
  icons: {
    icon: "/1logo.svg",
    shortcut: "/1logo.svg",
    apple: "/1logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <VHProvider />
        {children}
      </body>
    </html>
  );
}
