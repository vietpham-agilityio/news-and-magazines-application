import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

// Layout components
import { Footer, Header, FooterBar } from '@/ui/layouts';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'News & Magazine Application',
  description:
    'Stay updated with the latest news, in-depth articles, and engaging features from around the world.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />

        {/* Footer bar on mobile screen */}
        <FooterBar />
      </body>
    </html>
  );
};

export default RootLayout;
