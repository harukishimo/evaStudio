import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { PageLoader } from "@/components/layout/PageLoader";
import { SiteBackdrop } from "@/components/layout/SiteBackdrop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const mincho = Noto_Serif_JP({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.homeTitle,
    template: "%s | Eva.Oriental",
  },
  description: site.homeDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${mincho.variable} ${mincho.className} h-full antialiased`}>
      <body className="min-h-full bg-[#050308]">
        <SiteBackdrop />
        <div className="relative z-10 flex min-h-full flex-col">
          <PageLoader />
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8 md:py-12">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
