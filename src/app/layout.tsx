import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';

const dM_Sans = DM_Sans({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gulkaran Singh | Portfolio',
  description:
    "Hi! I'm Gulkaran and this is my personal portfolio! Take a look at my projects, experiences, notes, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
