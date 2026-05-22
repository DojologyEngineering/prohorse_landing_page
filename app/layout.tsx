import type { Metadata } from "next";
import { SiteLoadingOverlay } from "@/components/site-loading-overlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prohose Official",
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SiteLoadingOverlay />
        {children}
      </body>
    </html>
  );
}
