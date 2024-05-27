import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NZ3L9CKR" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
