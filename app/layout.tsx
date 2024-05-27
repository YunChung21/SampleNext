import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NZ3L9CKR');</script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZ3L9CKR"
            height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
        </noscript>
        {children}
        </body>
    </html>
  );
}
