import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
        {/* header */}
      <header className="header container flex flex-col items-center justify-center bg-white-100 h-auto mx-auto mt-11 sm:mt-4 lg:mt-11 lg:flex-row">
        <div className="h-12 w-full flex justify-between">
          {/* brand and navigate */}
        <div className="bg-white-5 w-12 h-12 sm:w-[664px]"></div>
          {/*search and user*/}
        <div className="bg-white-75 h-12 w-[300px] flex sm:hidden lg:flex lg:w-[656px]"></div>
        </div>
         {/*search on small screen*/}
         <div className="bg-primary-100 container h-14 hidden sm:flex lg:hidden"></div>
      </header>

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
