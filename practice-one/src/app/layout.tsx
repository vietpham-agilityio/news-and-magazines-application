import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Layout components
import { Header } from "@/ui/layouts";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "News & Magazine Application",
  description:
    "Stay updated with the latest news, in-depth articles, and engaging features from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}

      {/* footer */}
      <footer className="footer w-full hidden items-center justify-center bg-primary-50 h-[483px] mb-12.5 sm:flex lg:mb-11">
        <p>footer</p>
      </footer>

      {/* footer mobile */}
      <footer className="footer w-full flex items-center justify-center bg-primary-75 h-[70px] fixed bottom-0 sm:hidden">
        <p>footer</p>
      </footer>
      </body>
    </html>
  );
}
