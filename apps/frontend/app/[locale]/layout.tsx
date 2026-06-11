import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import { getMessages } from "next-intl/server";
import ThemeInitializer from "@/components/ThemeInitializer";
import { NextIntlClientProvider } from "next-intl";
import ChatShell from "@/components/layout/chat/ChatShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ccs.dev"), // troca pelo domínio real

  title: {
    default: "CCS | AI, Data & Blockchain Solutions",
    template: "%s | CCS",
  },

  description:
    "CCS is a technology company specializing in AI automation, data engineering, blockchain development, DevOps and custom software solutions.",

  applicationName: "CCS",

  keywords: [
    "AI development",
    "machine learning",
    "data engineering",
    "chatbots",
    "automation",
    "blockchain development",
    "bitcoin solutions",
    "software engineering",
    "web development",
    "devops",
    "cloud infrastructure",
    "distributed systems",
  ],

  authors: [{ name: "CCS Team" }],

  creator: "CCS",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ccs.dev",
    siteName: "CCS",
    title: "CCS | AI, Data & Blockchain Solutions",
    description:
      "We build intelligent systems using AI, data engineering, blockchain and automation.",
    images: [
      {
        url: "/assets/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "CCS - AI & Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CCS | AI & Software Engineering",
    description:
      "AI, data, blockchain and automation solutions for modern businesses.",
    images: "/assets/logo/og-image.png",
  },

  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full relative flex items-center justify-center flex-col">
        <ThemeInitializer />
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ChatShell />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
