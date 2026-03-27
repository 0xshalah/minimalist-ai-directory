import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Minimalist AI Directory",
  description: "A hyper-curated, distraction-free index of AI workflows. No marketing noise, just utility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col items-center bg-white text-[#030712] antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
